
import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("user", {
  id: text("id").primaryKey(),
  username: text("username").unique().notNull(),
});

export const sessionTable = sqliteTable("user_session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: integer("expires_at").notNull(),
});

export const oauthAccountTable = sqliteTable(
  "oauth_account",
  {
    providerId: text("provider_id").notNull(),
    providerUserId: text("provider_user_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => userTable.id),
  },
  (table) => {
    return {
      pkOauthAccount: primaryKey({
        name: "pk_oauth_account",
        columns: [table.providerId, table.providerUserId],
      }),
    };
  }
);
