import { UserId } from "@/types";

import { AuthorizationError } from "@/lib/auth/errors";
import { assertAuthenticated } from "@/lib/auth/sessions";
import {
  getAllProfilesWithUserInfo as dbGetAllProfiles,
  getProfile as dbGetProfile,
} from "@/lib/profile/dataaccess/profile.db";

export async function getProfile(userId: UserId) {
  return await dbGetProfile(userId);
}

export async function getAllProfiles() {
  const authenticatedUser = await assertAuthenticated();
  if (authenticatedUser.role !== "admin") {
    throw new AuthorizationError();
  }
  return await dbGetAllProfiles();
}
