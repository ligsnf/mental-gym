import { 
  integer,
  pgTable, 
  serial, 
  varchar,
} from 'drizzle-orm/pg-core';

export const users = pgTable('User', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 64 }),
  password: varchar('password', { length: 64 }),
  total_time_spent: integer('total_time_spent').default(0),
});