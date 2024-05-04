import { 
    pgTable, 
    serial, 
    integer,
    interval,
    timestamp,
  } from 'drizzle-orm/pg-core';

import { users } from './users'
import { categories } from './category';

export const sessions = pgTable('Session', {
    session_id: serial('session_id').primaryKey(),
    user_id: integer('user_id').references(() => users.id),
    category_id: integer('category_id').references(() => categories.category_id),
    duration: integer('duration'), // seconds?
    start_time: timestamp('start_time').notNull(),
    end_time: timestamp('end_time'),
})