import { db } from "@/db/index"
import { categories } from '@/db/schema/category';
import { getUser, getUserId } from './users';
import { eq } from 'drizzle-orm';

// get categories from user:
export async function getCategories(username: string) {
    const user = await getUserId(username);
    const userId = user[0].id
    return await db.select().from(categories).where(eq(categories.user_id, userId));
}

// make new category for user
export async function createCategory(username: string, title: string) {
    const user = await getUserId(username);
    const userId = user[0].id
    return await db.insert(categories).values({user_id: userId, title: title});
}