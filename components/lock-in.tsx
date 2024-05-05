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
import { useState } from 'react';

function LockIn() {
  const [valueKey, setValueKey] = useState('general');
  const [currentlyLockedIn, setCurrentlyLockedIn] = useState(false);

  return (
    <Card>
      <Select
        onValueChange={(newValue) => setValueKey(newValue)}
        defaultValue={valueKey}
      >
        <SelectTrigger className="">
          <SelectValue placeholder="general" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="FIT2004">FIT2004</SelectItem>
            <SelectItem value="FIT2014">FIT2014</SelectItem>
            <SelectItem value="FIT4165">FIT4165</SelectItem>
            <SelectItem value="FIT5145">FIT5145</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex justify-between gap-3 pt-4">
        <Card className="md:h-24 md:text-5xl h-18 text-3xl font-semibold">
          <Stopwatch
            isRunning={currentlyLockedIn}
            onToggleRunning={setCurrentlyLockedIn}
          />
        </Card>
        {currentlyLockedIn ? (
          <Button
            className="md:h-24 md:px-32 md:text-3xl h-18 w-1/2 px-24 text-2xl bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90"
            onClick={() => setCurrentlyLockedIn(false)}
          >
            STOP 😫
          </Button>
        ) : (
          <Button
            className="md:h-24 md:px-32 md:text-3xl h-18 w-1/2 px-24 text-2xl bg-violet-500 text-slate-50 hover:bg-violet-500/90 dark:bg-violet-900 dark:text-slate-50 dark:hover:bg-violet-900/90"
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
