import { type Metadata } from "next";
import NextLink from "next/link";

import { env } from "@/config/env";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/data-display/Card";
import { Link } from "@/components/ui/typography/Link";
import { MagicLinkForm } from "@/app/(auth)/_components/magic-link-form";
import { OAuthSignIn } from "@/app/(auth)/_components/oauth-signin";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Sign In",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return (
    <div className="max-w-lg min-w-[416px]">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <OAuthSignIn />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-panel text-fgsubtle px-2">
                Or continue with
              </span>
            </div>
          </div>
          <MagicLinkForm />
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div className="relative mr-1 hidden sm:inline-block">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-panel text-fgsubtle px-2">
                Don&apos;t have an account?
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <Link
              asChild
              aria-label="Sign up"
              intent="primary"
              size="sm"
              underline="auto"
            >
              <NextLink href="/signin/email">Sign up</NextLink>
            </Link>
            <Link
              asChild
              aria-label="Sign in with email"
              intent="primary"
              size="sm"
              underline="auto"
            >
              <NextLink href="/signin/email">Sign in with Email</NextLink>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
