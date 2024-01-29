import { defineSchema, defineTable } from "convex/server";
import { v, Validator } from "convex/values";

export default defineSchema({
  // User authentication tables
  users: defineTable({
    id: v.string(), // The unique id to identify the user in lucia
    email: v.string(),
  }).index("byId", ["id"]),

  sessions: defineTable({
    id: v.string(),
    user_id: v.string(),
    active_expires: v.float64(),
    idle_expires: v.float64(),
  })
    .index("byId", ["id"])
    .index("byUserId", ["user_id"]),

  auth_keys: defineTable({
    id: v.string(),
    hashed_password: v.union(v.string(), v.null()),
    user_id: v.string(),
  })
    .index("byId", ["id"])
    .index("byUserId", ["user_id"]),

  // Member profile
  // _id: convex defined id representing the user profile
  // _creationTime: the time in which the profile was creted.
  users_profile: defineTable({
    user_id: v.string(), // The unique id to identify the user in lucia
    updated_at: v.string(),
    profile_strava_id: v.string(),
    profile_firstname: v.string(),
    profile_lastname: v.string(),
    profile_url: v.string(),
    profile_city: v.string(),
    profile_state: v.string(),
    profile_country: v.string(),
    profile_sex: v.union(v.literal("M"), v.literal("F")),
  }),

  // Role - Table to store system roles
  users_role: defineTable({
    updated_at: v.string(), // It stores the date and time at which the role is updated.
    role_title: v.string(), // The role title.
    role_slug: v.string(), // The unique slug to search the role.
    role_description: v.string(), // The complete details about the role.
    role_active: v.boolean(), // The flag to check whether the role is currently active.
  }),

  // Permission - Table to store the system permissions
  users_permission: defineTable({
    updated_at: v.string(), // It stores the date and time at which the permission is updated.
    permission_title: v.string(), // The permission title.
    permission_slug: v.string(), // The unique slug to search the permission.
    permission_description: v.string(), // The complete details about the permission.
    permission_active: v.boolean(), // The flag to check whether the permission is currently active.
  }),

  // Role to Permission - Table to store the relationship between Role to permission
  users_role_to_permission: defineTable({
    role_id: v.id("users_role"),
    permission_id: v.id("users_permission"),
  }),

  // User to Role - Table to store the relationship between users and roles
  users_user_to_role: defineTable({
    role_id: v.id("users_role"),
    profile_id: v.id("users_profile"),
  }),

  // -----------------------------------------------------------------------
  // Posts - Post Table to store the post data.
  // _id: convex defined id representing the post
  // _creationTime: the time in which the post was creted.
  posts: defineTable({
    author_id: v.id("users_profile"), // The author id to identify the post author.
    updated_at: v.string(), // It stores the date and time at which the post is updated.
    published_at: v.string(), // It stores the date and time at which the post is published.
    post_parent_id: v.id("posts"), // The parent id to identify the parent post. It can be used to form the table of content of the parent post of series.
    post_content: v.string(), //The column used to store the post data.
    post_title: v.string(), // The post title to be displayed on the Post Page and the lists.
    post_meta_title: v.string(), // The meta title to be used for browser title and SEO.
    post_slug: v.string(), // The post slug to form the URL.
    post_expert: v.string(), // The summary of the post to mention the key highlights.
    post_status: v.union(
      v.literal("PUBLISHED"),
      v.literal("DRAFT"),
      v.literal("ARCHIVED")
    ), // It can be used to identify whether the post is publicly available.
  }),

  // Post Meta - Table used to store additional information of a post including the post banner URL etc.
  posts_meta: defineTable({
    post_id: v.id("posts"), // The post id to identify the parent post.
    meta_key: v.string(), // The key identifying the meta.
    meta_content: v.string(), // The column used to store the post meta data.
  }),

  // Category - Table containing the list of all categories the posts belong too.
  posts_category: defineTable({
    category_parent_id: v.id("posts_category"), // The parent id to identify the parent category.
    category_title: v.string(), // The category title
    category_meta_title: v.string(), // The meta title to be used for browser title and SEO.
    category_slug: v.string(), // The category slug to form the URL.
    category_content: v.string(), // The column used to store the category data.
  }),

  // Post to Category - Table to establish Posts and category relationship ( many to many )
  posts_post_to_category: defineTable({
    post_id: v.id("posts"),
    category_id: v.id("posts_category"),
  }),

  // Tags - Table containing the list of all tags the posts belong too.
  posts_tags: defineTable({
    tags_title: v.string(), // The tags title
    tags_meta_title: v.string(), // The meta title to be used for browser title and SEO.
    tags_slug: v.string(), // The tags slug to form the URL.
    tags_content: v.string(), // The column used to store the tags data.
  }),

  // Post to tags - Table to establish Posts and tags relationship ( many to many )
  posts_post_to_tags: defineTable({
    post_id: v.id("posts"),
    tags_id: v.id("posts_tags"),
  }),

  // -----------------------------------------------------------------------

  payments: defineTable({
    email: v.optional(v.string()),
    status: v.optional(v.string()),
    // If present the payment has been initiated
    stripeId: v.optional(v.string()),
    // If present the payment has been fulfilled
    courseId: v.optional(v.id("course")),
    studentId: v.optional(v.string()),
  })
    .index("stripeId", ["stripeId"])
    .index("studentId", ["studentId"]),

  course: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    // stripeProductId: v.optional(v.string()),
    // unitPrice: v.float64(),
    // unitCurrency: v.string(),
    // stripeUnitPriceId: v.string(),
  }),
});
