import "@/lib/config";
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle
// let client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);
export const db = drizzle(sql, { logger: true });

export * from 'drizzle-orm'
