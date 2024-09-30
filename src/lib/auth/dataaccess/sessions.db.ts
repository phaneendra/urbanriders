import { UserId } from "@/types";
import { eq } from "drizzle-orm";

import { sessions } from "@/lib/auth/dataaccess/schema";
import { db } from "@/lib/db";

export async function deleteSessionForUser(userId: UserId) {
  await db.delete(sessions).where(eq(sessions.userId, userId));
}
