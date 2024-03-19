import { db } from "@/lib/db";
import { userTable } from "@/lib/user/schema";

type NewUser = typeof userTable.$inferInsert;
export const insertUser = async (user: NewUser) => {
  return db
    .insert(userTable)
    .values(user)
    .returning({ insertedId: userTable.id })
    .onConflictDoNothing();
};
