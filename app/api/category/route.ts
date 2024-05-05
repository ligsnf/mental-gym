// pages/api/get-categories.js
import { getCategories } from '@/db/queries/categories';
import { NextRequest, NextResponse } from 'next/server';

export interface Category {
    category_id: number;
    user_id: number;
    title: string;
}


export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get('username');

    if (!username) {
        return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }

    try {
        const categories: Category[] = await getCategories(username);
        console.log('API', categories);
        return NextResponse.json(categories, { status: 200 });
    } catch (error) {
        console.error('Error fetching categories:', error);
        return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
    }
}