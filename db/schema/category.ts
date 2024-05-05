import { 
    pgTable, 
    serial, 
    varchar,
    integer,
  } from 'drizzle-orm/pg-core';

  import { users } from './users'


export const categories = pgTable('Category', {
    category_id: serial('category_id').primaryKey(),
    user_id: integer('user_id').references(() => users.id).notNull(),
    title: varchar('title', { length: 64}).notNull(),
})