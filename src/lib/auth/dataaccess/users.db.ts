import { UserId } from "@/types";
import { eq } from "drizzle-orm";

import { accounts, Status, User, users } from "@/lib/auth/dataaccess/schema";
import { db } from "@/lib/db";

export async function deleteUser(userId: UserId) {
  await db.delete(users).where(eq(users.id, userId));
}

export async function createUser(email: string) {
  const [user] = await db
    .insert(users)
    .values({
      email,
      status: "active",
    })
    .returning();
  return user;
}

export async function createMagicUser(email: string) {
  const [user] = await db
    .insert(users)
    .values({
      email,
      emailVerified: new Date(),
      status: "active",
    })
    .returning();

  await db
    .insert(accounts)
    .values({
      userId: user.id,
      accountType: "email",
    })
    .returning();

  return user;
}
// TODO: move to email service
// export async function verifyPassword(email: string, plainTextPassword: string) {
//   const user = await getUserByEmail(email);

//   if (!user) {
//     return false;
//   }

//   const account = await getAccountByUserId(user.id);

//   if (!account) {
//     return false;
//   }

//   const salt = account.salt;
//   const savedPassword = account.password;

//   if (!salt || !savedPassword) {
//     return false;
//   }

//   const hash = await hashPassword(plainTextPassword, salt);
//   return account.password == hash;
// }

export async function setEmailVerified(userId: UserId) {
  await db
    .update(users)
    .set({
      emailVerified: new Date(),
    })
    .where(eq(users.id, userId));
}

export async function setStatus(userId: UserId, status: Status) {
  await db
    .update(users)
    .set({
      status: status,
    })
    .where(eq(users.id, userId));
}

export async function updateUser(userId: UserId, updatedUser: Partial<User>) {
  await db.update(users).set(updatedUser).where(eq(users.id, userId));
}

export async function getUser(userId: UserId) {
  const user = await db.query.users.findFirst({
    where: eq(users.id, userId),
  });

  return user;
}

export async function getUserByEmail(email: string) {
  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  return user;
}

export async function getAllUsers() {
  const users = await db.query.users.findMany();

  return users;
}

// export async function getMagicUserAccountByEmail(email: string) {
//   const user = await db.query.users.findFirst({
//     where: eq(users.email, email),
//   });

//   return user;
// }
