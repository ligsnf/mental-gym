import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

// neonConfig.fetchConnectionCache = true;

let client = postgres(`${process.env.POSTGRES_URL!}?sslmode=require`);
// export const db = drizzle(sql);
export const db = drizzle(client, { logger: true });


export * from 'drizzle-orm'
