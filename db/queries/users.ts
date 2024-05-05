import { db } from "@/db/index"
import { users } from '@/db/schema/users';
import { eq } from 'drizzle-orm';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import { asc, desc } from 'drizzle-orm';

export async function getUser(email: string) {
  return await db.select().from(users).where(eq(users.email, email));
}

export async function getUserId(email: string) {
  return await db.select({id: users.id}).from(users).where(eq(users.email, email));
}

export async function createUser(email: string, password: string) {
  let salt = genSaltSync(10);
  let hash = hashSync(password, salt);

  return await db.insert(users).values({ email, password: hash });
}

export async function getUsers() {
  return await db.select({ email: users.email, total_time_spent: users.total_time_spent }).from(users).orderBy(desc(users.total_time_spent)).limit(20);
}



