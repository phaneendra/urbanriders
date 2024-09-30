import { relations, sql } from "drizzle-orm";
import {
  integer,
  primaryKey,
  sqliteTableCreator,
  text,
} from "drizzle-orm/sqlite-core";

import { users } from "@/lib/auth/dataaccess/schema";

const sqliteTable = sqliteTableCreator((name) => `app_${name}`);

export const muscleEnum = [
  "abdominals",
  "hamstrings",
  "adductors",
  "quadriceps",
  "biceps",
  "shoulders",
  "chest",
  "middle_back",
  "calves",
  "glutes",
  "lower_back",
  "lats",
  "triceps",
  "traps",
  "forearms",
  "neck",
  "abductors",
] as const;

export const forceTypeEnum = ["push", "pull", "static"] as const;

export const levelTypeEnum = ["beginner", "intermediate", "expert"] as const;

export const mechanicTypeEnum = ["compound", "isolation"] as const;

export const equipmentTypeEnum = [
  "body_only",
  "machine",
  "other",
  "foam_roll",
  "kettlebells",
  "dumbbell",
  "cable",
  "barbell",
  "bands",
  "medicine_ball",
  "exercise_ball",
  "e_z_curl_bar",
] as const;

export const categoryTypeEnum = [
  "strength",
  "stretching",
  "plyometrics",
  "strongman",
  "powerlifting",
  "cardio",
  "olympic_weightlifting",
] as const;

export const trackingTypeEnum = [
  "reps",
  "duration",
  "weight",
  "distance",
] as const;

export const activityTypes = sqliteTable("activity_types", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  aliases: text("aliases", { mode: "json" })
    .notNull()
    .$type<string[]>()
    .default(sql`'[]'`),
  primary_muscles: text("primary_muscles", { enum: muscleEnum }).notNull(),
  secondary_muscles: text("secondary_muscles", { enum: muscleEnum }).notNull(),
  force_type: text("force_type", { enum: forceTypeEnum }),
  level: text("level", { enum: levelTypeEnum }),
  mechanic: text("mechanic", { enum: mechanicTypeEnum }),
  equipment: text("equipment", { enum: equipmentTypeEnum }),
  category: text("category", { enum: categoryTypeEnum }),
  instructions: text("instructions", { mode: "json" })
    .notNull()
    .$type<string[]>()
    .default(sql`'[]'`),
  description: text("description"),
  tips: text("tips", { mode: "json" })
    .notNull()
    .$type<string[]>()
    .default(sql`'[]'`),
  image: text("image"),
  createdAt: integer("created_at").default(sql`(cast(unixepoch() as int))`),
  updatedAt: integer("updated_at").default(sql`(cast(unixepoch() as int))`),
});

export const favoriteActivityTypes = sqliteTable(
  "favorite_activity_types",
  {
    activityTypeId: integer("activity_type_id", { mode: "number" })
      .references(() => activityTypes.id, {
        onDelete: "cascade",
      })
      .notNull(),
    userId: integer("user_id", { mode: "number" })
      .references(() => users.id, {
        onDelete: "cascade",
      })
      .notNull(),
    createdAt: integer("created_at").default(sql`(cast(unixepoch() as int))`),
  },
  (table) => {
    return {
      primaryKey: primaryKey({
        columns: [table.activityTypeId, table.userId],
        name: "activity_user_pk",
      }),
    };
  }
);

// Challenges
// -----------------------------------------------------------------------------
export const challenges = sqliteTable("challenges", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  createdById: integer("created_by_id", { mode: "number" }).references(
    () => users.id
  ),
  notes: text("notes"),
  createdAt: integer("created_at").default(sql`(cast(unixepoch() as int))`),
  updatedAt: integer("updated_at").default(sql`(cast(unixepoch() as int))`),
});

export const challengesRelations = relations(challenges, ({ many }) => ({
  challengeType: many(challengeTypes),
}));

export const challengeTypes = sqliteTable("challenge_types", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  challengeId: integer("challenge_id", { mode: "number" })
    .references(() => challenges.id, {
      onDelete: "cascade",
    })
    .notNull(),
  activityTypeId: integer("activity_type_id", { mode: "number" })
    .references(() => activityTypes.id, {
      onDelete: "cascade",
    })
    .notNull(),
  sets: integer("sets", { mode: "number" }),
  reps: integer("reps", { mode: "number" }),
  weight: integer("weight", { mode: "number" }),
  duration: integer("duration", { mode: "number" }),
  distance: integer("distance", { mode: "number" }),
  order: integer("order", { mode: "number" }),
  trackingType: text("tracking_type", { enum: trackingTypeEnum }),
});

export const challengeTypeRelations = relations(challengeTypes, ({ one }) => ({
  challenge: one(challenges, {
    fields: [challengeTypes.challengeId],
    references: [challenges.id],
  }),
}));

// Activities
// -----------------------------------------------------------------------------
export const activities = sqliteTable("activities", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  userId: integer("user_id", { mode: "number" })
    .references(() => users.id, {
      onDelete: "cascade",
    })
    .notNull(),
  challengeId: integer("challenge_id", { mode: "number" }).references(
    () => challenges.id,
    {
      onDelete: "cascade",
    }
  ),
  startDate: integer("start_date", { mode: "number" }),
  endDate: integer("end_date", { mode: "number" }),
  inProgress: integer("in_progress", { mode: "boolean" }),
  duration: integer("duration", { mode: "number" }),
  createdAt: integer("created_at").default(sql`(cast(unixepoch() as int))`),
  updatedAt: integer("updated_at").default(sql`(cast(unixepoch() as int))`),
});

export const activityRelations = relations(activities, ({ many }) => ({
  activityLogs: many(activityLog),
}));

export const activityLog = sqliteTable("activity_log", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  activityId: integer("activity_id", { mode: "number" })
    .references(() => activities.id, {
      onDelete: "cascade",
    })
    .notNull(),
  activityTypeId: integer("activity_type_id", { mode: "number" })
    .references(() => activityTypes.id, {
      onDelete: "cascade",
    })
    .notNull(),
  trackingType: text("tracking_type", { enum: trackingTypeEnum }),
});

export const activityLogRelations = relations(activityLog, ({ one }) => ({
  activity: one(activities, {
    fields: [activityLog.activityId],
    references: [activities.id],
  }),
}));

export const activityToSetLogRelations = relations(activityLog, ({ many }) => ({
  setLogs: many(setLog),
}));

export const setLog = sqliteTable("set_log", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  activityLogId: integer("activity_log_id", { mode: "number" })
    .references(() => activities.id, {
      onDelete: "cascade",
    })
    .notNull(),
  weight: integer("weight", { mode: "number" }),
  distance: integer("distance", { mode: "number" }),
  duration: integer("duration", { mode: "number" }),
  reps: integer("reps", { mode: "number" }),
  order: integer("order", { mode: "number" }),
});

export const setLogRelations = relations(setLog, ({ one }) => ({
  activityLog: one(activityLog, {
    fields: [setLog.activityLogId],
    references: [activityLog.id],
  }),
}));
