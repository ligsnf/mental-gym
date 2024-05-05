// pages/api/get-categories.js
import { getCategories } from '@/db/queries/categories';
import type { NextApiRequest, NextApiResponse } from 'next';

export interface Category {
    category_id: number;
    user_id: number;
    title: string;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { username } = req.query;

    // let userNameString: string;

    const userNameString = Array.isArray(username) ? username[0] : username;

    if (!userNameString) {
        // If username is not defined or not the expected type, return an error
        return res.status(400).json({ error: 'Username is required and must be a string' });
    }

    try {
        const categories: Category[] = await getCategories(userNameString);
        console.log("API",categories);
        return res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        return res.status(500).json({ error: 'Failed to fetch categories' });
    }
}
