"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useMutation } from "@/hooks/use-mutation";
import { useAction, useMutation, useQuery } from "convex/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

import { paymentSchema } from "@/lib/validations/payments";
import { Button } from "@/components/ui/elements/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/forms/Input";
import { Icons } from "@/components/icons";

type Inputs = z.infer<typeof paymentSchema>;
type CheckOutFormProps = { courseid: string };

export const CheckOutForm = (props: CheckOutFormProps) => {
  const router = useRouter();
  const getCheckOutUrl = useAction(api.payments.stripe.pay);
  const [isPending, startTransition] = React.useTransition();
  const { courseid } = props;

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      email: "",
      student_id: "",
      price: 600,
      terms: 1,
    },
  });
  const { watch } = form;
  const values = watch();

  const onSubmit = (data: Inputs) => {
    startTransition(async () => {
      try {
        console.log(data);
        const url = await getCheckOutUrl({
          email: data.email,
          price: data.price,
          student_id: data.student_id,
          term: data.terms,
          course_id: courseid as Id<"course">,
        });
        console.log(url);
        router.push(`${url}`);
      } catch (err) {
        console.log(err);
        toast.error("Unable to Connect to Stripe, Please try later");
      }
    });
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="student_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Id</FormLabel>
              <FormControl>
                <Input type="text" placeholder="S0000001" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="phanee@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price in ($USD)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="600" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of terms</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-fgsubtle text-sm">
          Total: <strong> {values.price * values.terms}</strong>
        </p>

        <Button type="submit" disabled={isPending}>
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Pay Now
          <span className="sr-only">Pay Now</span>
        </Button>
      </form>
    </Form>
  );
};
