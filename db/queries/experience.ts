import { db } from "@/db/index"
import { experiences } from '@/db/schema/experience';
import { SQLWrapper, eq } from 'drizzle-orm';


// get experience from user
export async function getExperience(user_id: number | SQLWrapper) {
    return await db.select().from(experiences).where(eq(experiences.user_id, user_id))
}

// get date range for experience
