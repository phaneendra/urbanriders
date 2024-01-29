import { lucia, UserSchema } from "lucia";

import { DatabaseReader, DatabaseWriter } from "../_generated/server";
import { convexAdapter } from "./convexAdapter";

export function getAuth(db: DatabaseWriter) {
  return lucia({
    // We cheat to allow queries to use `getAuth`
    adapter: convexAdapter(db),
    // TODO: Set the LUCIA_ENVIRONMENT variable to "PROD"
    // on your prod deployment's dashboard
    env: (process.env.LUCIA_ENVIRONMENT as "PROD" | undefined) ?? "DEV",
    getUserAttributes(user: UserSchema) {
      return {
        _id: user._id,
        _creationTime: user._creationTime,
        email: user.email,
      };
    },
  });
}

export type Auth = ReturnType<typeof getAuth>;
