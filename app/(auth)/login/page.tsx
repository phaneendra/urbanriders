import { Metadata } from "next";
import Link from "next/link";

import { NavLink } from "@/components/ui/navigation/NavLinks";
import { Icons } from "@/components/icons";
import { UserAuthForm } from "@/components/user-auth-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <NavLink
        asChild
        variant="ghost"
        className="absolute left-4 top-4 md:left-8 md:top-8"
      >
        <Link href="/">
          <>
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            Back
          </>
        </Link>
      </NavLink>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-fgsubtle text-sm">
            Enter your email to sign in to your account
          </p>
        </div>
        <UserAuthForm />
        <p className="text-fgsubtle px-8 text-center text-sm">
          <Link
            href="/register"
            className="hover:text-primary-fg underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
