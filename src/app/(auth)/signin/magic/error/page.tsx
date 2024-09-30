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
  title: "Error Signing In",
  description: "signin error expired token",
};

export default function SignInPage() {
  return (
    <div className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Expired Token</CardTitle>
          <CardDescription>Error signing in</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          Sorry, this token was either expired or already used. Please try
          logging in again
        </CardContent>
      </Card>
    </div>
  );
}
