'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Slider } from './ui/slider';

const TaskCard = () => {
  const [progress, setProgress] = useState<number[]>([]);

  return (
    <div className="p-4 border rounded-sm">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Input placeholder="New task ..." />
          <Input
            className="max-w-16"
            type="number"
            defaultValue={0}
            value={progress.length > 0 ? progress[0] : ''}
            onChange={(e) => setProgress([Number(e.target.value)])}
          />
        </div>
        <Slider
          onValueChange={(percent) => setProgress(percent)}
          value={progress.length > 0 ? progress : undefined}
          defaultValue={[0]}
          max={100}
          step={1}
        />
      </div>
    </div>
  );
};

export default TaskCard;
