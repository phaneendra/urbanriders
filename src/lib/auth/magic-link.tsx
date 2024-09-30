import { siteConfig } from "@/config/site";
import {
  deleteMagicToken,
  getMagicLinkByToken,
  upsertMagicLink,
} from "@/lib/auth/dataaccess/magic-link.db";
import {
  createMagicUser,
  getUserByEmail,
  setEmailVerified,
  setStatus,
} from "@/lib/auth/dataaccess/users.db";
import { NotFoundError, TokenExpiredError } from "@/lib/auth/errors";
import { sendEmail } from "@/lib/email";
import { createProfile } from "@/lib/profile";
import { generateRandomName } from "@/lib/utils/generateRandomNames";
import { MagicLinkEmail } from "@/components/email/magic-link-email";

export async function sendMagicLink(email: string) {
  const token = await upsertMagicLink(email);

  await sendEmail(
    email,
    `Your magic login link for ${siteConfig.name}`,
    <MagicLinkEmail token={token} />
  );
}

export async function loginWithMagicLink(token: string) {
  const magicLinkInfo = await getMagicLinkByToken(token);
  if (!magicLinkInfo) {
    throw new NotFoundError();
  }

  if (magicLinkInfo.tokenExpiresAt! < new Date()) {
    throw new TokenExpiredError();
  }

  const existingUser = await getUserByEmail(magicLinkInfo.email);

  if (existingUser) {
    await setEmailVerified(existingUser.id);
    await setStatus(existingUser.id, "active");
    await deleteMagicToken(token);
    return existingUser;
  } else {
    const newUser = await createMagicUser(magicLinkInfo.email);
    await deleteMagicToken(token);
    await createProfile(newUser.id, generateRandomName());
    return newUser;
  }
}
