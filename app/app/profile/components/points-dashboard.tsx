'use client';

import { Label } from '@/components/ui/label';
import { Card, DateRangePicker, DateRangePickerValue } from '@tremor/react';
import { ProgressChart } from './chart';
import { StreakTracker } from './tracker';

const trackerData = [
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
  { color: 'rose', tooltip: 'May 31' },
  { color: 'emerald', tooltip: 'Jun 1' },
  { color: 'emerald', tooltip: 'Jun 2' },
  { color: 'emerald', tooltip: 'Jun 3' },
  { color: 'emerald', tooltip: 'Jun 4' },
  { color: 'emerald', tooltip: 'Jun 5' },
  { color: 'emerald', tooltip: 'Jun 6' },
  { color: 'emerald', tooltip: 'Jun 7' },
  { color: 'emerald', tooltip: 'Jun 8' },
  { color: 'emerald', tooltip: 'Jun 9' },
  { color: 'rose', tooltip: 'Jun 10' },
  { color: 'emerald', tooltip: 'Jun 11' },
  { color: 'rose', tooltip: 'Jun 12' },
  { color: 'emerald', tooltip: 'Jun 13' },
  { color: 'emerald', tooltip: 'Jun 14' },
  { color: 'emerald', tooltip: 'Jun 15' },
  { color: 'emerald', tooltip: 'Jun 16' },
  { color: 'rose', tooltip: 'Jun 17' },
];

const chartdata = [
  {
    date: 'Jan 22',
    'XP earned': 2338,
  },
  {
    date: 'Feb 22',
    'XP earned': 2103,
  },
  {
    date: 'Mar 22',
    'XP earned': 2194,
  },
  {
    date: 'Apr 22',
    'XP earned': 2108,
  },
  {
    date: 'May 22',
    'XP earned': 1812,
  },
  {
    date: 'Jun 22',
    'XP earned': 1726,
  },
  {
    date: 'Jul 22',
    'XP earned': 1982,
  },
  {
    date: 'Aug 22',
    'XP earned': 2012,
  },
  {
    date: 'Sep 22',
    'XP earned': 2342,
  },
  {
    date: 'Oct 22',
    'XP earned': 2473,
  },
  {
    date: 'Nov 22',
    'XP earned': 3848,
  },
  {
    date: 'Dec 22',
    'XP earned': 3736,
  },
];

const PointsDashboard = () => {
  // const onDateRangeChange = (newRange: DateRangePickerValue) => {
  //   console.log(newRange); // Or do something with this new range, like setting cookies or local storage
  // };
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);
  const dateRangeValue: DateRangePickerValue = {
    from: sevenDaysAgo,
    to: today,
  };

  return (
    <>
      <div className="space-y-1">
        <Label htmlFor="date-range-picker">Choose Date Range</Label>
        <DateRangePicker
          id="date-range-picker"
          className="max-w-md"
          value={dateRangeValue}
          // onValueChange={setValue}
        />
      </div>
      <Card>
        <StreakTracker data={trackerData} />
      </Card>
      <Card>
        <ProgressChart chartdata={chartdata} valueKey="XP earned" />
      </Card>
    </>
  );
};

export default PointsDashboard;
