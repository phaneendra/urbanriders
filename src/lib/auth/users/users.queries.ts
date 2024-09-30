import { AuthorizationError } from "@/lib/auth/errors";
import { assertAuthenticated } from "@/lib/auth/sessions";
import { getAllUsers as dbgetAllUsers } from "@/lib/auth/dataaccess/users.db";

export async function getAllUsers() {
  const authenticatedUser = await assertAuthenticated();
  if (authenticatedUser.role !== "admin") {
    throw new AuthorizationError();
  }

  return await dbgetAllUsers();
}
