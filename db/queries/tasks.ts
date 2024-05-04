import { db } from "@/db/index"
import { tasks } from '@/db/schema/tasks';
import { getUser } from './users';
import { eq } from 'drizzle-orm';


// get tasks from a user's email/username
export async function getTasks(user_id: number) {
    return await db.select().from(tasks).where(eq(tasks.user_id, user_id));
}


// create task for user
export async function createTask(user_id: number, title: string) {
    return await db.insert(tasks).values({user_id : user_id, task_title: title});
}