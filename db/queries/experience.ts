import { db } from "@/db/index"
import { experiences } from '@/db/schema/experience';
import { eq } from 'drizzle-orm';


// get experience
export async function getExperience(userId: number) {
    return await db.select({ amount: experiences.amount })
                   .from(experiences)
                   .where(eq(experiences.user_id, userId)); // Adding a filter to match the user_id
}

