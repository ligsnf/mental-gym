'use client';

import Stopwatch from '@/components/stopwatch';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@tremor/react';
import { useState, useEffect } from 'react';
import { auth } from '@/app/auth';

export interface Category {
  category_id: number;
  user_id: number;
  title: string;
}



function LockIn() {
  const [valueKey, setValueKey] = useState('general');
  const [currentlyLockedIn, setCurrentlyLockedIn] = useState(false);

  const [categories, setCategories] = useState<Category[]>([]);


      // Fetch categories from the API route
  useEffect(() => {
    async function fetchCategories() {
        try {
            const response = await fetch(`/api/category/?username=crispy`);
            const data: Category[] = await response.json();
            console.log("CATEGORIES", data)
            setCategories(data);
        } catch (error) {
            console.error('Failed to fetch categories:', error);
        }
    }

    fetchCategories();
  }, []);


  return (
    <Card>
      <div className="flex justify-between">
        <Select
          onValueChange={(newValue) => setValueKey(newValue)}
          defaultValue={valueKey}
        >
          <SelectTrigger className="h-24 w-60 px-8 text-3xl font-semibold">
            <SelectValue placeholder="general" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map((category) => (
                <SelectItem key={category.category_id} value={category.title}>
                  {category.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="h-24 text-7xl font-semibold">
          <Stopwatch
            isRunning={currentlyLockedIn}
            onToggleRunning={setCurrentlyLockedIn}
          />
        </div>
        {currentlyLockedIn ? (
          <Button
            className="h-24 w-44 px-32 text-3xl bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90"
            onClick={() => setCurrentlyLockedIn(false)}
          >
            STOP 😫
          </Button>
        ) : (
          <Button
            className="h-24 w-44 px-32 text-3xl bg-violet-500 text-slate-50 hover:bg-violet-500/90 dark:bg-violet-900 dark:text-slate-50 dark:hover:bg-violet-900/90"
            onClick={() => setCurrentlyLockedIn(true)}
          >
            LOCK-IN 🗿
          </Button>
        )}
      </div>
    </Card>
  );
}

export default LockIn;
