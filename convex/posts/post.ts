import { v } from "convex/values";

import { query } from "../_generated/server";

export const getPost = query({
  args: { postId: v.id("posts") },
  handler: async (ctx, { postId }) => {
    if (postId === undefined) {
      return null;
    }
    return await ctx.db.get(postId);
  },
});

export const listAllPosts = query({
  handler: async (ctx) => {
    return await ctx.db.query("posts").collect();
  },
});

export const listPostsByUserId = query({
  handler: async (ctx) => {
    return await ctx.db.query("posts").collect();
  },
});
