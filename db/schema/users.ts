import { 
  integer,
  pgTable, 
  serial, 
  varchar,
} from 'drizzle-orm/pg-core';


//test

export const users = pgTable('User', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 64 }),
  password: varchar('password', { length: 64 }),
  avatar: varchar('avatar', { length: 256 }),
  total_time_spent: integer('total_time_spent').default(0),
  total_exp: integer('total_exp').default(0),
});