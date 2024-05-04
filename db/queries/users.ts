import { db } from "@/db/index"
import { users } from '@/db/schema/users';
import { eq } from 'drizzle-orm';
import { genSaltSync, hashSync } from 'bcrypt-ts';

export async function getUser(email: string) {
  return await db.select().from(users).where(eq(users.email, email));
}

export async function createUser(email: string, password: string) {
  let salt = genSaltSync(10);
  let hash = hashSync(password, salt);

  return await db.insert(users).values({ email, password: hash });
}

export async function getUsers() {
  return await db.select({email: users.email}).from(users); // Fetch only the email field
}


