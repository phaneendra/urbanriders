import { v } from "convex/values";
import Stripe from "stripe";

import { api, internal } from "../_generated/api";
import { action, internalAction } from "../_generated/server";
import { Id } from "./../_generated/dataModel.d";

("use node");

// Pay now button calls this action.
export const pay = action({
  args: {
    email: v.optional(v.string()),
    price: v.float64(),
    term: v.number(),
    student_id: v.string(),
    course_id: v.string(),
  },
  handler: async (
    { runQuery, runMutation },
    { email, price, term, student_id, course_id }
  ): Promise<string | null> => {
    const domain = process.env.HOSTING_URL ?? "http://localhost:3000";
    const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
      apiVersion: "2023-10-16",
    });

    // ======
    // verify authentication
    // call service to verify authentication.
    // ======

    // Fetch course details to be sent to stripe.
    const courseData = await runQuery(api.course.details.getCourse, {
      courseId: course_id as Id<"course">,
    });

    // Call service to create a payment intent in database
    const paymentId = await runMutation(
      internal.payments.stripeOperations.create,
      {
        email: email,
        studentId: student_id,
        courseId: courseData?._id,
      }
    );

    // ======
    // Call stripe to create a payment session.
    // ======
    const session = await stripe.checkout.sessions.create({
      client_reference_id: paymentId,
      // customer: student_id,
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "INR",
            unit_amount: price,
            tax_behavior: "inclusive",
            product_data: {
              name: `${courseData?.name}`,
              description: `${courseData?.description}`,
            },
          },
          quantity: term,
        },
      ],
      mode: "payment",
      success_url: `${domain}/pricing/result?paymentId=${paymentId}`,
      cancel_url: `${domain}`,
      automatic_tax: { enabled: false },
    });

    // call service to update payment intent to pending
    await runMutation(internal.payments.stripeOperations.markPending, {
      paymentId: paymentId,
      stripeId: session.id,
      status: session.payment_status,
    });

    // return stripe checkout url.
    return session.url;
  },
});

// Stripe on an event calls this via webhook
export const fulfill = internalAction({
  args: { signature: v.string(), payload: v.string() },
  handler: async ({ runMutation }, { signature, payload }) => {
    const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
      apiVersion: "2023-10-16",
    });

    // verify if stripe is the one calling this webhook.
    const webhookSecret = process.env.STRIPE_WEBHOOKS_SECRET as string;
    try {
      const event = await stripe.webhooks.constructEventAsync(
        payload,
        signature,
        webhookSecret
      );
      const stripeId = (event.data.object as { id: string }).id;
      const session = await stripe.checkout.sessions.retrieve(stripeId);
      // update the status of payment.
      await runMutation(internal.payments.stripeOperations.fulfill, {
        stripeId: stripeId,
        status: session.payment_status,
      });

      switch (event.type) {
        case "checkout.session.completed": {
          console.log(
            `Payment for StripeID ${stripeId} completed. Status : ${session.payment_status}`
          );

          // Check if the order is paid (for example, from a card payment)
          //
          // A delayed notification payment will have an `unpaid` status, as
          // you're still waiting for funds to be transferred from the customer's
          // account.
          if (session.payment_status === "paid") {
            // fulfillOrder(session);
            console.log(
              `Payment for StripeID ${stripeId} succeded. Status : ${session.payment_status}`
            );
            console.log("Proceed to fullfill order");
          }
          break;
        }
        case "checkout.session.async_payment_succeeded": {
          // fulfillOrder(session);
          console.log(
            `Payment for StripeID ${stripeId} succeded. Status : ${session.payment_status}`
          );
          console.log("Proceed to fullfill order");

          break;
        }

        case "checkout.session.async_payment_failed": {
          // Send an email to the customer asking them to retry their order
          // emailCustomerAboutFailedPayment(session);
          console.log(
            `Payment for StripeID ${stripeId} Failed. Status : ${session.payment_status}`
          );
          console.log("Proceed to fullfill order");

          break;
        }
      }
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, error: (err as { message: string }).message };
    }
  },
});
