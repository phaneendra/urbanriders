import { eq } from "drizzle-orm";

import { magicTokens } from "@/lib/auth/dataaccess/schema";
import { db } from "@/lib/db";
import { generateRandomToken } from "@/lib/utils/generateRandomTokens";

export const TOKEN_LENGTH = 32;
export const TOKEN_TTL = 1000 * 60 * 5; // 5 min
export const VERIFY_EMAIL_TTL = 1000 * 60 * 60 * 24 * 7; // 7 days

export async function upsertMagicLink(email: string) {
  const token = await generateRandomToken(TOKEN_LENGTH);
  const tokenExpiresAt = new Date(Date.now() + TOKEN_TTL);

  await db
    .insert(magicTokens)
    .values({
      email,
      token,
      tokenExpiresAt,
    })
    .onConflictDoUpdate({
      target: magicTokens.email,
      set: {
        token,
        tokenExpiresAt,
      },
    });

  return token;
}

export async function getMagicLinkByToken(token: string) {
  const existingToken = await db.query.magicTokens.findFirst({
    where: eq(magicTokens.token, token),
  });

  return existingToken;
}

export async function deleteMagicToken(token: string) {
  await db.delete(magicTokens).where(eq(magicTokens.token, token));
}
