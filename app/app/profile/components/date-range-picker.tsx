"use client";

import { useState } from 'react';
import { DateRangePicker, DateRangePickerValue } from '@tremor/react';

interface ClientDatePickerProps {
  onDateRangeChange: (newRange: DateRangePickerValue) => void;
}

export function ClientDatePicker({ onDateRangeChange }: ClientDatePickerProps) {
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  });
  const [value, setValue] = useState<DateRangePickerValue>({
    from: new Date(2023, 1, 1),
    to: new Date(),
  });

  const handleValueChange = (value: DateRangePickerValue) => {
    setValue(value);
    onDateRangeChange(value);
  };

  return (
    <DateRangePicker
      className="max-w-md"
      value={value}
      onValueChange={handleValueChange}
    />
  );
}

export default ClientDatePicker;
