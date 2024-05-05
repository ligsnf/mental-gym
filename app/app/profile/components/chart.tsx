
"use client"

import { useState } from 'react';
import { AreaChart } from '@tremor/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ChartDataItem {
  date: string;
  [key: string]: string | number;
}

interface ProgressChartProps {
  chartdata: ChartDataItem[];
  // valueKey: string;
}

export function ProgressChart({ chartdata }: ProgressChartProps) {
  const [valueKey, setValueKey] = useState('XP earned');

  const formatter = new Intl.NumberFormat('en-US');

  const totalValue = chartdata.reduce((acc, item) => {
    const value = item[valueKey];
    return acc + (typeof value === 'number' ? value : 0);
  }, 0);

  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Total {valueKey}</h3>
        <Select onValueChange={(newValue) => setValueKey(newValue)} defaultValue={valueKey}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="XP earned" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="XP earned">XP earned</SelectItem>
              <SelectItem value="Hours LOCKED-IN">Hours LOCKED-IN</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{formatter.format(totalValue)}</p>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={[valueKey]}
        colors={['cyan']}
      />
    </>
  );
}