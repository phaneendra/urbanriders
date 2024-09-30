import { relations } from "drizzle-orm";
import { integer, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

import { users } from "@/lib/auth/dataaccess/schema";

const sqliteTable = sqliteTableCreator((name) => `app_${name}`);

export const profiles = sqliteTable("profile", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  userId: integer("user_id", { mode: "number" })
    .references(() => users.id, { onDelete: "cascade" })
    .unique()
    .notNull(),
  displayName: text("display_name").notNull().default(""),
  imageId: text("image_id"),
  image: text("image"),
  bio: text("bio").notNull().default(""),
});

export const userRelations = relations(users, ({ one }) => ({
  profile: one(profiles),
}));

export const profileRelations = relations(profiles, ({ one }) => ({
  user: one(users, { fields: [profiles.userId], references: [users.id] }),
}));

export type Profile = typeof profiles.$inferSelect;
export type ProfileWithUsers = Profile & { user: typeof users.$inferSelect };
