import {
  customMutation,
  customQuery,
} from "convex-helpers/server/customFunctions";
import { v } from "convex/values";
import { Session } from "lucia";

import {
  DatabaseWriter,
  mutation,
  query,
  QueryCtx,
} from "../_generated/server";
import { Auth, getAuth } from "./lucia";

// Use `authQuery` instead of `query` to add this behavior.
// modifies ctx to include the session from database or null.
export const authQuery = customQuery(
  query, // The base function we're extending
  {
    args: { sessionId: v.union(v.null(), v.string()) },
    input: async (ctx, args) => {
      const session = await getValidExistingSession(ctx, args.sessionId);
      return { ctx: { ...ctx, session }, args: { ...args } };
    },
  }
);

// Use `authMutation` instead of `mutation` to add this behavior.
// modifies ctx to include the session from database or null
// as well as lucia's auth.
export const authMutation = customMutation(mutation, {
  args: { sessionId: v.union(v.null(), v.string()) },
  input: async (ctx, args) => {
    const auth = getAuth(ctx.db);
    const session = await getValidSessionAndRenew(auth, args.sessionId);
    return { ctx: { ...ctx, auth, session }, args: { ...args } };
  },
});

const getValidExistingSession = async (
  ctx: QueryCtx,
  sessionId: string | null
) => {
  if (sessionId === null) {
    return null;
  }
  // get auth from Lucia
  // the cast is OK because we will only expose the existing session
  const auth = getAuth(ctx.db as DatabaseWriter);
  try {
    // fetch the session, if idle then return null
    const session = (await auth.getSession(sessionId)) as Session | null;
    if (session === null || session.state === "idle") {
      return null;
    }
    return session;
  } catch (error) {
    // invalid session ID
    return null;
  }
};

const getValidSessionAndRenew = async (
  auth: Auth,
  sessionId: string | null
) => {
  if (sessionId === null) {
    return null;
  }

  try {
    // validate session and reset the session if its idle.
    return await auth.validateSession(sessionId);
  } catch (error) {
    // invalid session ID
    return null;
  }
};
