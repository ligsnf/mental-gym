'use client';

import { Label } from '@/components/ui/label';
import { Card, DateRangePicker, DateRangePickerValue } from '@tremor/react';
import { ProgressChart } from './chart';
import { StreakTracker } from './tracker';
import { useState } from 'react';

const trackerData = [
  { color: 'rose', tooltip: 'May 1' },
  { color: 'emerald', tooltip: 'May 2' },
  { color: 'rose', tooltip: 'May 3' },
  { color: 'emerald', tooltip: 'May 4' },
  { color: 'emerald', tooltip: 'May 5' },
  { color: 'emerald', tooltip: 'May 6' },
  { color: 'emerald', tooltip: 'May 7' },
  { color: 'emerald', tooltip: 'May 8' },
  { color: 'emerald', tooltip: 'May 9' },
  { color: 'emerald', tooltip: 'May 10' },
  { color: 'rose', tooltip: 'May 11' },
  { color: 'emerald', tooltip: 'May 12' },
  { color: 'rose', tooltip: 'May 13' },
  { color: 'emerald', tooltip: 'May 14' },
  { color: 'emerald', tooltip: 'May 15' },
  { color: 'emerald', tooltip: 'May 16' },
  { color: 'emerald', tooltip: 'May 17' },
  { color: 'rose', tooltip: 'May 18' },
  { color: 'emerald', tooltip: 'May 19' },
  { color: 'emerald', tooltip: 'May 20' },
  { color: 'emerald', tooltip: 'May 21' },
  { color: 'emerald', tooltip: 'May 22' },
  { color: 'emerald', tooltip: 'May 23' },
  { color: 'emerald', tooltip: 'May 24' },
  { color: 'emerald', tooltip: 'May 25' },
  { color: 'emerald', tooltip: 'May 26' },
  { color: 'emerald', tooltip: 'May 27' },
  { color: 'rose', tooltip: 'May 28' },
  { color: 'emerald', tooltip: 'May 29' },
  { color: 'emerald', tooltip: 'May 30' },
];

const chartdata = [
  { date: 'May 1', 'XP earned': 43 },
  { date: 'May 2', 'XP earned': 23 },
  { date: 'May 3', 'XP earned': 38 },
  { date: 'May 4', 'XP earned': 21 },
  { date: 'May 5', 'XP earned': 94 },
  { date: 'May 6', 'XP earned': 18 },
  { date: 'May 7', 'XP earned': 26 },
  { date: 'May 8', 'XP earned': 19 },
  { date: 'May 9', 'XP earned': 12 },
  { date: 'May 10', 'XP earned': 42 },
  { date: 'May 11', 'XP earned': 73 },
  { date: 'May 12', 'XP earned': 48 },
  { date: 'May 13', 'XP earned': 37 },
  { date: 'May 14', 'XP earned': 29 },
  { date: 'May 15', 'XP earned': 22 },
  { date: 'May 16', 'XP earned': 19 },
  { date: 'May 17', 'XP earned': 24 },
  { date: 'May 18', 'XP earned': 31 },
  { date: 'May 19', 'XP earned': 28 },
  { date: 'May 20', 'XP earned': 17 },
  { date: 'May 21', 'XP earned': 23 },
  { date: 'May 22', 'XP earned': 19 },
  { date: 'May 23', 'XP earned': 27 },
  { date: 'May 24', 'XP earned': 32 },
  { date: 'May 25', 'XP earned': 28 },
  { date: 'May 26', 'XP earned': 21 },
  { date: 'May 27', 'XP earned': 18 },
  { date: 'May 28', 'XP earned': 24 },
  { date: 'May 29', 'XP earned': 31 },
  { date: 'May 30', 'XP earned': 29 },
];

const PointsDashboard = () => {
  const today = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30);
  const [dateRangeValue, setdateRangeValue] = useState<DateRangePickerValue>({
    from: thirtyDaysAgo,
    to: today,
  });

  return (
    <>
      <div className="space-y-1">
        <Label htmlFor="date-range-picker">Choose Date Range</Label>
        <DateRangePicker
          id="date-range-picker"
          className="max-w-md"
          value={dateRangeValue}
          onValueChange={setdateRangeValue}
        />
      </div>
      <Card>
        <StreakTracker data={trackerData} />
      </Card>
      <Card>
        <ProgressChart chartdata={chartdata} />
      </Card>
    </>
  );
};

export default PointsDashboard;
