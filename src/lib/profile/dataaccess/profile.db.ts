import { UserId } from "@/types";
import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { Profile, profiles } from "@/lib/profile/dataaccess/schema";

export async function createProfile(
  userId: UserId,
  displayName: string,
  image?: string
) {
  const [profile] = await db
    .insert(profiles)
    .values({
      userId,
      image,
      displayName,
    })
    .onConflictDoNothing()
    .returning();
  return profile;
}

export async function updateProfile(
  userId: UserId,
  updateProfile: Partial<Profile>
) {
  await db
    .update(profiles)
    .set(updateProfile)
    .where(eq(profiles.userId, userId));
}

export async function getProfile(userId: UserId) {
  const profile = await db.query.profiles.findFirst({
    where: eq(profiles.userId, userId),
  });

  return profile;
}

export async function getAllProfiles() {
  const profiles = await db.query.profiles.findMany();

  return profiles;
}

export async function getAllProfilesWithUserInfo() {
  const profiles = await db.query.profiles.findMany({
    with: {
      user: true,
    },
  });

  return profiles;
}
