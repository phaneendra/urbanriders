"use client";

import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/elements/Button";
import { Icons } from "@/components/icons";

const oauthProviders = [
  { name: "Google", icon: "google" },
  { name: "Facebook", icon: "facebook" },
  { name: "Discord", icon: "discord" },
  { name: "Github", icon: "gitHub" },
  { name: "Strava", icon: "strava" },
] satisfies {
  name: string;
  icon: keyof typeof Icons;
}[];

export function OAuthSignIn() {
  // const [isLoading, setIsLoading] = React.useState<OAuthStrategy | null>(null);
  // const { signIn, isLoaded: signInLoaded } = useSignIn();

  async function oauthSignIn(provider: string) {
    toast.info(`Using provider ${provider}`);
    // if (!signInLoaded) return null;
    // try {
    //   setIsLoading(provider);
    //   await signIn.authenticateWithRedirect({
    //     strategy: provider,
    //     redirectUrl: "/sso-callback",
    //     redirectUrlComplete: "/",
    //   });
    // } catch (error) {
    //   setIsLoading(null);
    //   const unknownError = "Something went wrong, please try again.";
    //   isClerkAPIResponseError(error)
    //     ? toast.error(error.errors[0]?.longMessage ?? unknownError)
    //     : toast.error(unknownError);
    // }
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
      {oauthProviders.map((provider) => {
        const Icon = Icons[provider.icon];

        return (
          <Button
            aria-label={`Sign in with ${provider.name}`}
            key={provider.name}
            variant="outline"
            className="bg-ui w-full sm:w-auto"
            onClick={() => void oauthSignIn(provider.name)}
            //disabled={isLoading !== null}
          >
            {/* {isLoading === provider.strategy ? (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            ) : ( */}
            <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
            {/* )} */}
            {provider.name}
          </Button>
        );
      })}
    </div>
  );
}
