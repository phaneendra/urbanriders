import { integer, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

export const accountTypeEnum = ["email", "google", "github"] as const;
export const roleEnum = ["admin", "member", "guest"] as const;
export const statusEnum = ["active", "inactive"] as const;

const sqliteTable = sqliteTableCreator((name) => `app_${name}`);

// Lucia auth tables
// -----------------
export const users = sqliteTable("user", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  email: text("email").unique(),
  emailVerified: integer("email_verified", { mode: "timestamp" }),
  status: text("status", { enum: statusEnum }).notNull().default("inactive"),
  role: text("role", { enum: roleEnum }).notNull().default("guest"),
});



export const sessions = sqliteTable("session", {
  id: text("id").primaryKey(),
  userId: integer("user_id", { mode: "number" })
    .references(() => users.id, {
      onDelete: "cascade",
    })
    .notNull(),
  expiresAt: integer("expires_at").notNull(),
});

export const accounts = sqliteTable("accounts", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  userId: integer("user_id", { mode: "number" })
    .references(() => users.id, { onDelete: "cascade" })
    .unique()
    .notNull(),
  accountType: text("account_type", { enum: accountTypeEnum }).notNull(),
  githubId: text("github_id").unique(),
  googleId: text("google_id").unique(),
  password: text("password"),
  salt: text("salt"),
});

// Magic link tables
// -----------------
export const magicTokens = sqliteTable("magic_token", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  token: text("token"),
  tokenExpiresAt: integer("token_expires_at", { mode: "timestamp" }).notNull(),
});

export type User = typeof users.$inferSelect;
export type Account = typeof accounts.$inferSelect;
export type Role = (typeof roleEnum)[number];
export type Status = (typeof statusEnum)[number];
