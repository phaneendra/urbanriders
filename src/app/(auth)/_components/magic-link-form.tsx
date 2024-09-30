"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useServerAction } from "zsa-react";

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
import { Icons } from "@/components/icons";

import { signInMagicLinkAction } from "./magic-link.actions";

const magicLinkSchema = z.object({
  email: z.string().email(),
});

export function MagicLinkForm() {
  const { execute, isPending } = useServerAction(signInMagicLinkAction, {
    onError({ err }) {
      toast(`Something went wrong ${err.message}`);
    },
  });

  const form = useForm<z.infer<typeof magicLinkSchema>>({
    resolver: zodResolver(magicLinkSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof magicLinkSchema>) {
    execute(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full"
                  placeholder="Enter your email"
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isPending}
          className="w-full"
          size="base"
        >
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Sign in with magic link
          <span className="sr-only">Sign in</span>
        </Button>
      </form>
    </Form>
  );
}
