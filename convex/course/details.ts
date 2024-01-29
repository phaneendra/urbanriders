import { v } from "convex/values";

import { query } from "../_generated/server";

export const getCourse = query({
  args: { courseId: v.id("course") },
  handler: async (ctx, { courseId }) => {
    if (courseId === undefined) {
      return null;
    }
    return await ctx.db.get(courseId);
  },
});

export const listCourses = query({
  handler: async (ctx) => {
    return await ctx.db.query("course").collect();
  },
});
