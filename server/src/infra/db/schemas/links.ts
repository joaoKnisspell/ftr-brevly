import { randomUUID } from "crypto";
import { integer, timestamp } from "drizzle-orm/pg-core";
import { text } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const links = pgTable('links', {
    id: text('id').primaryKey().$defaultFn(() => randomUUID()),
    url: text('url').notNull(),
    slug: text('slug').notNull().unique(),
    accesses: integer("accesses").default(0).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})