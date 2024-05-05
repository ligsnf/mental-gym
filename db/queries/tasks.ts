import { db } from '@/db/index';
import { tasks } from '@/db/schema/tasks';
import { and, eq } from 'drizzle-orm';
import { getUserId } from './users';

// get tasks from a user's email/username
export async function getTasks(username: string) {
  const user = await getUserId(username);
  const userId = user[0].id;
  return await db.select().from(tasks).where(eq(tasks.user_id, userId));
}

// create task for user
export async function createTask(username: string, title: string) {
  const user = await getUserId(username);
  const userId = user[0].id;
  return await db.insert(tasks).values({ user_id: userId, task_title: title });
}

export async function editTask(
  username: string,
  taskId: number,
  title: string,
  progress: number
) {
  const user = await getUserId(username);
  const userId = user[0].id;
  return await db
    .update(tasks)
    .set({ task_title: title, progress })
    .where(and(eq(tasks.task_id, taskId), eq(tasks.user_id, userId)));
}
