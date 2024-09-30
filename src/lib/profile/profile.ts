import { UserId } from "@/types";

import { createProfile as dbcreateProfile } from "@/lib/profile/dataaccess/profile.db";

export async function createProfile(
  userId: UserId,
  displayName: string,
  image?: string
) {
  return await dbcreateProfile(userId, displayName, image);
}
