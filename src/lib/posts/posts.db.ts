import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { postsTable } from "@/lib/posts/schema";

type Post = typeof postsTable.$inferInsert;

export const insertPosts = async (data: Post) => {
  return await db.insert(postsTable).values(data).returning().get();
};

export const updatePosts = async (data: Post) => {
  return await db
    .update(postsTable)
    .set(data)
    .where(eq(postsTable.id, data.id))
    .returning()
    .get();
};

export const deletePosts = async (id: string) => {
  return await db
    .delete(postsTable)
    .where(eq(postsTable.id, id))
    .returning({ id: postsTable.id })
    .get();
};

export const getPostById = async (id: string) => {
  return await db.select().from(postsTable).where(eq(postsTable.id, id)).get();
};
