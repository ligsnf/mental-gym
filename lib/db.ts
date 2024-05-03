import "@/lib/config";
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { users } from 'lib/schema';
import * as schema from 'lib/schema';
import { eq } from 'drizzle-orm';
import { genSaltSync, hashSync } from 'bcrypt-ts';

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle
// let client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);
export const db = drizzle(sql, { schema });

export async function getUser(email: string) {
  return await db.select().from(users).where(eq(users.email, email));
}

export async function createUser(email: string, password: string) {
  let salt = genSaltSync(10);
  let hash = hashSync(password, salt);

  return await db.insert(users).values({ email, password: hash });
}
