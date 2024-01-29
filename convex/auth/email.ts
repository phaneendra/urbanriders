import { v } from "convex/values";

import { Id } from "../_generated/dataModel";
import {
  authMutation,
  authQuery,
} from "./../convexLuciaAuth/convexAuthHelpers";

export const getUser = authQuery({
  args: {},
  handler: async (ctx) => {
    return ctx.session?.user;
  },
});

export const signIn = authMutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, { email, password }) => {
    const key = await ctx.auth.useKey("password", email, password);
    const session = await ctx.auth.createSession({
      userId: key.userId,
      attributes: {
        // These will be filled out by Convex
        _id: "" as Id<"sessions">,
        _creationTime: 0,
      },
    });
    return session.sessionId;
  },
});

export const signUp = authMutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, { email, password }) => {
    const user = await ctx.auth.createUser({
      key: {
        password: password,
        providerId: "password",
        providerUserId: email,
      },
      attributes: {
        email,
        // These will be filled out by Convex
        _id: "" as Id<"users">,
        _creationTime: 0,
      },
    });
    const session = await ctx.auth.createSession({
      userId: user.userId,
      attributes: {
        // These will be filled out by Convex
        _id: "" as Id<"sessions">,
        _creationTime: 0,
      },
    });
    return session.sessionId;
  },
});
