"use client";

import * as React from "react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel.d";
import { useQuery } from "convex/react";

type PaymentStatusProps = { paymentId: string };

export const PaymentStatus = (props: PaymentStatusProps) => {
  const { paymentId } = props;
  const payment = useQuery(api.payments.stripeOperations.getPaymentStatus, {
    paymentId: paymentId as Id<"payments">,
  });

  return (
    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
      Status: {payment?.status}
    </h2>
  );
};
