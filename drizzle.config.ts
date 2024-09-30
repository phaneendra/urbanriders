import { defineConfig } from "drizzle-kit";

import { env } from "@/config/env";

console.log(env);

/** @type {import('drizzle-kit').Config} */
export default defineConfig({
  dialect: "sqlite",
  out: env.DATABASE_MIGRATE_FOLDER ?? "./drizzle/migrations",
  schema: "./src/lib/db/schema.ts",
  driver: "turso",
  dbCredentials: {
    url: env.DATABASE_URL ?? "http://localhost:8080",
  },
});
