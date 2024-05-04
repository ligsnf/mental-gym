import { db } from "@/db/index"
import { tasks } from '@/db/schema/tasks';
import { getUser, getUserId } from './users';
import { eq } from 'drizzle-orm';


// get tasks from a user's email/username
export async function getTasks(username: string) {
    const user = await getUserId(username);
    const userId = user[0].id
    return await db.select().from(tasks).where(eq(tasks.user_id, userId));
}


// create task for user
export async function createTask(username: string, title: string) {
    const user = await getUserId(username);
    const userId = user[0].id
    return await db.insert(tasks).values({user_id : userId, task_title: title});
}