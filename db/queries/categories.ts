import { db } from "@/db/index"
import { categories } from '@/db/schema/category';
import { getUser } from './users';
import { eq } from 'drizzle-orm';

// get categories from user:
export async function getCategories(user_id: number) {
    return await db.select().from(categories).where(eq(categories.user_id, user_id));
}

// make new category for user
export async function createCategory(user_id: number, title: string) {
    return await db.insert(categories).values({user_id: user_id, title: title});
}