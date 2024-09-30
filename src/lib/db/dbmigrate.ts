/* eslint-disable no-console */
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";

import { env } from "@/config/env.js";

async function main() {
  console.log("Migration started");

  const client = createClient({
    url: env.DATABASE_URL ?? "",
    authToken: env.DATABASE_AUTH_TOKEN ?? "",
  });

  const db = drizzle(client);

  await migrate(db, { migrationsFolder: env.DATABASE_MIGRATE_FOLDER });

  console.log("Migration completed");

  process.exit(0);
}

main().catch((error) => {
  console.error("Migration failed");
  console.log(error);
  process.exit(1);
});
