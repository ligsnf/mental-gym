'use client';

import { Card } from '@tremor/react';
import { useState } from 'react';
import { Input } from './ui/input';
import { Slider } from './ui/slider';

interface TaskCardProps {
  title?: string;
  progress?: number;
}

const TaskCard = ({ title }: TaskCardProps) => {
  const [progress, setProgress] = useState<number[]>([]);

  const createTask = async (title: string) => {
    fetch('/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
      }),
    });
  };

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Input
            placeholder="New task ..."
            value={title}
            onBlur={(e) => createTask(e.target.value)}
          />
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
    </Card>
  );
};

export default TaskCard;
