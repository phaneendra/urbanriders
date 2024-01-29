import * as React from "react";

import { CourseListing } from "@/components/payments/course-listing";

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-16">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, Checkout Flow
        </h2>
        <p className="text-fgsubtle max-w-[85%] leading-normal sm:text-lg sm:leading-7">
          Dev Project is a demo app using a Stripe test environment. You can
          find a list of test card numbers on the{" "}
          <a
            href="https://stripe.com/docs/testing#cards"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-8"
          >
            Stripe docs
          </a>
          . Eg: For INR 4000 0035 6000 0008
        </p>
      </div>

      <CourseListing />

      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="text-fgsubtle max-w-[85%] leading-normal sm:leading-7">
          Dev Project is a demo app.{" "}
          <strong>You can test this and won&apos;t be charged.</strong>
        </p>
      </div>
    </section>
  );
}
