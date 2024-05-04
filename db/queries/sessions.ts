import { db } from "@/db/index"
import { sessions } from '@/db/schema/session';
import { getUserId } from '@/db/queries/users';
import { eq } from 'drizzle-orm';


// create session for user
export async function getUserSessions(username: string) {
    const user = await getUserId(username);
    const userId = user[0].id
    return await db.select().from(sessions).where(eq(sessions.user_id, userId));
}

// gets sessions for a category
export async function getCategorySessions(category_id: number) {
    return await db.select().from(sessions).where(eq(sessions.category_id, category_id));
}

// start/create a new session
export async function createSession(username: string, category_id: number, start_time: Date) {
    const user = await getUserId(username);
    const userId = user[0].id

    return await db.insert(sessions).values({
        user_id: userId,
        category_id: category_id,
        start_time: start_time,
        end_time: null,
        duration: null
    });
}

export async function endSession(session_id: number, end_time: Date) {
    const session = await db.select({
        start_time: sessions.start_time
    }).from(sessions).where(eq(sessions.session_id, session_id)).limit(1);

    const { start_time } = session[0];

    const startDate = new Date(start_time);
    const totalSeconds = Math.round((end_time.getTime() - startDate.getTime())/1000);

    const hours = Math.floor(totalSeconds / 3600);
    const remainingSecondsAfterHours = totalSeconds % 3600;

    // Calculate minutes
    const minutes = Math.floor(remainingSecondsAfterHours / 60);
    const seconds = Math.floor(remainingSecondsAfterHours % 60);
    const interval = `${hours} hours, ${minutes} minutes, ${seconds} seconds`

    return await db.update(sessions).set({
        end_time: end_time,
        duration: interval
    }).where(eq(sessions.session_id, session_id));
}

export async function getSession(session_id: number) {
    return await db.select({duration: sessions.duration}).from(sessions).where(eq(sessions.session_id, session_id));
}