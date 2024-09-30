"use client";

import * as React from "react";
import NextLink from "next/link";

import { Button } from "@/components/ui/elements/Button";
import { Icons } from "@/components/icons";

const oauthProviders = [
  { name: "google", icon: "google" },
  { name: "facebook", icon: "facebook" },
  { name: "discord", icon: "discord" },
  { name: "github", icon: "gitHub" },
  { name: "strava", icon: "strava" },
] satisfies {
  name: string;
  icon: keyof typeof Icons;
}[];

// TODO: Add loading spinner
// TODO: Fix error-failed-to-fetch-rsc-payload-falling-back-to-browser-navigation
//       https://github.com/vercel/next.js/issues/53813
export function OAuthSignIn() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
      {oauthProviders.map((provider) => {
        const Icon = Icons[provider.icon];

        return (
          <Button
            aria-label={`Sign in with ${provider.name}`}
            key={provider.name}
            variant="outline"
            className="bg-ui w-full sm:w-auto"
          >
            <NextLink href={`/api/login/${provider.name}`}>
              <Icon aria-hidden="true" />
            </NextLink>
          </Button>
        );
      })}
    </div>
  );
}
