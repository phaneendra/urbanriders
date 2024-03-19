import { sql } from "drizzle-orm";
import {
  foreignKey,
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { userTable } from "@/lib/user";

// -----------------------------------------------------------------------
// Posts - Post Table to store the post data.
export const postsTable = sqliteTable(
  "posts",
  {
    id: text("id").primaryKey(),
    authorId: text("author_id")
      .references(() => userTable.id)
      .notNull(), // The author id to identify the post author.
    createdAt: integer("created_at").default(sql`(cast(unixepoch() as int))`), // It stores the date and time at which the post is updated.
    updatedAt: integer("updated_at").default(sql`(cast(unixepoch() as int))`), // It stores the date and time at which the post is updated.
    publishedAt: integer("published_at"), // It stores the date and time at which the post is published.
    postParentId: text("post_parent_id"), // The parent id to identify the parent post. It can be used to form the table of content of the parent post of series.
    postContent: text("post_content"), //The column used to store the post data.
    postTitle: text("post_title"), // The post title to be displayed on the Post Page and the lists.
    postMetaTitle: text("post_meta_title"), // The meta title to be used for browser title and SEO.
    postSlug: text("post_slug"), // The post slug to form the URL.
    postExpert: text("post_expert"), // The summary of the post to mention the key highlights.
    postStatus: text("post_status", {
      enum: ["PUBLISHED", "DRAFT", "ARCHIVED"],
    }), // It can be used to identify whether the post is publicly available.
  },
  (table) => {
    return {
      parentReference: foreignKey({
        columns: [table.postParentId],
        foreignColumns: [table.id],
        name: "parent_fk",
      }),
    };
  }
);
export const insertPostsSchema = createInsertSchema(postsTable);
export const selectPostsSchema = createSelectSchema(postsTable);

// Post Meta - Table used to store additional information of a post including the post banner URL etc.
export const postsMetaTable = sqliteTable("posts_meta", {
  postId: text("post_id").references(() => postsTable.id), // The post id to identify the parent post.
  metaKey: text("meta_key"), // The key identifying the meta.
  metaContent: text("meta_content"), // The column used to store the post meta data.
});

// Category - Table containing the list of all categories the posts belong too.
export const postsCategoryTable = sqliteTable("posts_category", {
  categoryId: text("id"),
  createdAt: integer("created_at").default(sql`(cast(unixepoch() as int))`), // It stores the date and time at which the category was created.
  updatedAt: integer("updated_at").default(sql`(cast(unixepoch() as int))`), // It stores the date and time at which the category is updated.
  categoryParentId: text("category_parent_id"), // The parent id to identify the parent category.
  categoryTitle: text("category_title"), // The category title
  categoryMetaTitle: text("category_meta_title"), // The meta title to be used for browser title and SEO.
  categorySlug: text("category_slug"), // The category slug to form the URL.
  categoryContent: text("category_content"), // The column used to store the category data.
});

export const insertPostCategorySchema = createInsertSchema(postsCategoryTable);
export const selectPostCategorySchema = createSelectSchema(postsCategoryTable);

// Post to Category - Table to establish Posts and category relationship ( many to many )
export const postToCategoryTable = sqliteTable("posts_to_category", {
  postId: text("post_id").references(() => postsTable.id),
  categoryId: text("category_id").references(
    () => postsCategoryTable.categoryId
  ),
});

// Tags - Table containing the list of all tags the posts belong too.
export const postsTagsTable = sqliteTable("posts_tags", {
  tagId: text("id"),
  createdAt: integer("created_at").default(sql`(cast(unixepoch() as int))`), // It stores the date and time at which the tag was created.
  updatedAt: integer("updated_at").default(sql`(cast(unixepoch() as int))`), // It stores the date and time at which the tag is updated.
  tagsTitle: text("tags_title"), // The tags title
  tagsMetaTitle: text("tags_meta_title"), // The meta title to be used for browser title and SEO.
  tagsSlug: text("tags_slug"), // The tags slug to form the URL.
  tagsContent: text("tags_content"), // The column used to store the tags data.
});

export const insertPostTagSchema = createInsertSchema(postsTagsTable);
export const selectPostTagSchema = createSelectSchema(postsTagsTable);

// Post to tags - Table to establish Posts and tags relationship ( many to many )
export const postToTagsTable = sqliteTable("posts_to_tags", {
  postId: text("post_id").references(() => postsTable.id),
  tagsId: text("post_id").references(() => postsTagsTable.tagId),
});

// -----------------------------------------------------------------------
