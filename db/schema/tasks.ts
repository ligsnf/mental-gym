import { 
    integer,
    pgTable, 
    serial, 
    varchar,
    boolean,
} from 'drizzle-orm/pg-core';

import { users } from './users'


export const tasks = pgTable('Task', {
    task_id: serial('task_id').primaryKey(),
    user_id: integer('user_id').notNull().references(() => users.id),
    task_title: varchar('task_title', { length: 128}).notNull(),
    completed: boolean('completed').default(false),
    progress: integer('progress').default(0),
  });
