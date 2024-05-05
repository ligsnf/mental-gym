import { Tracker } from '@tremor/react';

interface TrackerData {
  color: string;
  tooltip: string;
}

interface StreakTrackerProps {
  data: TrackerData[];
}

export function StreakTracker({ data }: StreakTrackerProps) {
  const emeraldCount = data.filter(item => item.color === 'emerald').length;
  const percentageEmerald = (emeraldCount / data.length * 100).toFixed(2);

  return (
    <>
      <p className="text-tremor-default flex items-center justify-between">
        <span className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">LOCKED-IN Streak 🔥</span>
        <span className="text-tremor-content dark:text-dark-tremor-content">focused {percentageEmerald}%</span>
      </p>
      <Tracker data={data} className="mt-2" />
    </>
  );
}
