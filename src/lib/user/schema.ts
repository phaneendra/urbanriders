import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("user", {
  id: text("id").primaryKey(),
  username: text("username").unique().notNull(),
});
