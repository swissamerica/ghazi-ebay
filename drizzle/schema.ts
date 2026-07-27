import {
    sqliteTable,
    integer,
    text
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {

    id: integer("id").primaryKey(),

    username: text("username")
        .notNull()
        .unique(),

    passwordHash: text("password_hash")
        .notNull(),

    role: text("role")
        .notNull()
        .default("user"),

    avatar: text("avatar"),

    createdAt: integer("created_at")
        .notNull(),

    updatedAt: integer("updated_at")
        .notNull()

});

export const sessions = sqliteTable("sessions", {

    id: text("id")
        .primaryKey(),

    userId: integer("user_id")
        .notNull(),

    expiresAt: integer("expires_at")
        .notNull()

});
