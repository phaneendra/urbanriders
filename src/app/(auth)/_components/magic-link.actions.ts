"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

import { sendMagicLink } from "@/lib/auth/magic-link";
import { unauthenticatedAction } from "@/lib/auth/safe-actions";
import { rateLimitByKey } from "@/lib/limiter";

export const signInMagicLinkAction = unauthenticatedAction
  .createServerAction()
  .input(
    z.object({
      email: z.string().email(),
    })
  )
  .handler(async ({ input }) => {
    await rateLimitByKey({ key: input.email, limit: 1, window: 30000 });
    await sendMagicLink(input.email);
    redirect("/signin/magic");
  });
