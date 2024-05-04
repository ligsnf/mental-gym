import { 
    pgTable, 
    serial, 
    integer,
    timestamp,
  } from 'drizzle-orm/pg-core';

import { users } from './users'

export const experiences = pgTable('Experience', {
    exp_id: serial('exp_id').primaryKey(),
    user_id: integer('user_id').references(() => users.id),
    date: timestamp('date').notNull(),
    amount: integer('amount').notNull(),
})