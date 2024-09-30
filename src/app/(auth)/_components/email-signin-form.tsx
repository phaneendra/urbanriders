"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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
import { PasswordInput } from "@/components/ui/password-input";
import { Icons } from "@/components/icons";

const emailAuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type Inputs = z.infer<typeof emailAuthSchema>;

export function SignInForm() {
  const router = useRouter();
  // const updateSessionId = useSessionContextUpdater().updateSessionId;
  // const signIn = useMutation(api.auth.email.signIn);
  // const { isLoaded, signIn, setActive } = useSignIn();
  const [isPending, startTransition] = React.useTransition();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(emailAuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: Inputs) => {
    startTransition(async () => {
      try {
        // const sessionId = await signIn({
        //   email: "",
        //   password: data.password,
        //   sessionId: null,
        // });
        // updateSessionId(sessionId);

        router.push(`${window.location.origin}/`);
      } catch (err) {
        console.log(err);
        toast.error("Invalid email or password");
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="rodneymullen180@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Sign in
          <span className="sr-only">Sign in</span>
        </Button>
      </form>
    </Form>
  );
}
