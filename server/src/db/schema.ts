import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core";

export const links = pgTable("links", {
    id: uuid("id").defaultRandom().primaryKey(),
    url: text("url").notNull(),
    shortened_url: text("shortened_url").notNull().unique(),
    accesses: integer("accesses").default(0).notNull(),
    created_at: timestamp('created_at').defaultNow().notNull(),
})