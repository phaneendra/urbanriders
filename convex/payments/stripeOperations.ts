import { v } from "convex/values";

import { internalMutation, query } from "../_generated/server";

export const getPaymentStatus = query({
  args: { paymentId: v.optional(v.id("payments")) },
  handler: async (ctx, { paymentId }) => {
    if (paymentId === undefined) {
      return null;
    }
    return await ctx.db.get(paymentId);
  },
});

// internal mutation to create payment intent in db
export const create = internalMutation({
  args: {
    email: v.optional(v.string()),
    studentId: v.string(),
    courseId: v.optional(v.id("course")),
  },
  handler: async (ctx, { email, studentId, courseId }) => {
    return await ctx.db.insert("payments", {
      email,
      studentId,
      courseId,
    });
  },
});

// internal mutation to update payment intent in db as well as mark it as pending
export const markPending = internalMutation({
  args: {
    paymentId: v.id("payments"),
    stripeId: v.string(),
    status: v.string(),
  },
  handler: async (ctx, { paymentId, stripeId, status }) => {
    await ctx.db.patch(paymentId, { stripeId, status });
  },
});

// internal mutation to update payment intent with status from stripe
export const fulfill = internalMutation({
  args: { stripeId: v.string(), status: v.string() },
  handler: async (ctx, { stripeId, status }) => {
    const { _id: paymentId } = (await ctx.db
      .query("payments")
      .withIndex("stripeId", (q) => q.eq("stripeId", stripeId))
      .unique())!;
    //const messageId = await ctx.db.insert("messages", { text });
    await ctx.db.patch(paymentId, { status });
  },
});
