import { User, UserId } from "@/types";

import {
  deleteUser as dbdeleteUser,
  updateUser as dbupdateUser,
} from "@/lib/auth/dataaccess/users.db";
import { AuthorizationError } from "@/lib/auth/errors";
import { assertAuthenticated } from "@/lib/auth/sessions";

// Deletes the user and all associated data
// This is used when deleting a user account
// check if user is admin or self
export async function deleteUser(userId: UserId) {
  const authenticatedUser = await assertAuthenticated();
  if (authenticatedUser.id !== userId || authenticatedUser.role !== "admin") {
    throw new AuthorizationError();
  }

  return await dbdeleteUser(userId);
}

// Admin only create user
// Admin cannot create user, he can only invite user via magic link

// Admin or the user himself can update user data
export async function updateUser(userId: UserId, updatedUser: Partial<User>) {
  const authenticatedUser = await assertAuthenticated();
  if (authenticatedUser.id !== userId || authenticatedUser.role !== "admin") {
    throw new AuthorizationError();
  }

  return await dbupdateUser(userId, updatedUser);
}
