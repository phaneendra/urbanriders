"use server";

import { z } from "zod";

import { authenticatedAction } from "@/lib/auth/safe-actions";
import { deleteUser, updateUser } from "@/lib/auth/users/users.actions";

export const deleteUserAction = authenticatedAction
  .createServerAction()
  .input(
    z.object({
      id: z.number(),
    })
  )
  .handler(async ({ input }) => {
    await deleteUser(input.id);
  });

export const updateUserAction = authenticatedAction
  .createServerAction()
  .input(
    z.object({
      id: z.number(),
      data: z.object({
        email: z.string().email().optional(),
        role: z.string().optional(),
        status: z.string().optional(),
      }),
    })
  )
  .handler(async ({ input }) => {
    await updateUser(input.id, input.data);
  });
