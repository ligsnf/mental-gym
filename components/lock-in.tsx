"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Stopwatch from '@/components/stopwatch';

function LockIn() {
  const [valueKey, setValueKey] = useState('general');
  const [currentlyLockedIn, setCurrentlyLockedIn] = useState(false);

  return (
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
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="FIT2004">FIT2004</SelectItem>
            <SelectItem value="FIT2014">FIT2014</SelectItem>
            <SelectItem value="FIT4165">FIT4165</SelectItem>
            <SelectItem value="FIT5145">FIT5145</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="h-24 text-7xl font-semibold">
        <Stopwatch isRunning={currentlyLockedIn} onToggleRunning={setCurrentlyLockedIn} />
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
  );
}

export default LockIn;
