import { db } from "@/db/index"
import { sessions } from '@/db/schema/session';
import { eq } from 'drizzle-orm';


// create session for user
export async function getUserSessions(user_id: number) {
    return await db.select().from(sessions).where(eq(sessions.user_id, user_id));
}

// gets sessions for a category
export async function getCategorySessions(category_id: number) {
    return await db.select().from(sessions).where(eq(sessions.category_id, category_id));
}

// start/create a new session
export async function createSession(user_id: number, category_id: number, start_time: Date) {
    return await db.insert(sessions).values({
        user_id: user_id,
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

    const durationSeconds = Math.round((end_time.getTime() - new Date(start_time).getTime()) / 1000);
    console.log(durationSeconds);
    return await db.update(sessions).set({
        end_time: end_time,
        duration: durationSeconds
    }).where(eq(sessions.session_id, session_id));
}

export async function getSession(session_id: number) {
    return await db.select({duration: sessions.duration}).from(sessions).where(eq(sessions.session_id, session_id));
}