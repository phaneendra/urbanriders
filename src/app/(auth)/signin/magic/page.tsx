import { type Metadata } from "next";

import { env } from "@/config/env.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/data-display/Card";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Sign In",
  description: "Sign in to your account",
};

export default function SignInPage() {
  return (
    <div className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Check your email</CardTitle>
          <CardDescription>Check your email for a magic link</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          We sent you a magic link to sign in. Click the link in your email to
          sign in.
        </CardContent>
      </Card>
    </div>
  );
}
