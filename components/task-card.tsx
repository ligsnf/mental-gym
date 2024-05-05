'use client';

import { Card } from '@tremor/react';
import { useState } from 'react';
import { Input } from './ui/input';
import { Slider } from './ui/slider';

interface TaskCardProps {
  taskId?: number;
  title?: string;
  progress?: number;
}

const TaskCard = ({ taskId, title, progress = 0 }: TaskCardProps) => {
  const [localProgress, setLocalProgress] = useState<number[]>([progress]);

  const updateOrCreateTask = async (title: string, progress: number) => {
    fetch('/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        taskId,
        title,
        progress,
      }),
    });
  };

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Input
            placeholder="New task ..."
            defaultValue={title}
            onBlur={(e) => updateOrCreateTask(e.target.value, progress)}
          />
          <Input
            className="max-w-16"
            type="number"
            defaultValue={progress || 0}
            value={localProgress[0]}
            onChange={(e) =>
              // title && updateOrCreateTask(title, Number(e.target.value))
              setLocalProgress([Number(e.target.value)])
            }
          />
        </div>
        <Slider
          onValueChange={(percent) =>
            // title && updateOrCreateTask(title, percent[0])
            setLocalProgress(percent)
          }
          defaultValue={[progress || 0]}
          value={localProgress}
          max={100}
          step={1}
        />
      </div>
    </Card>
  );
};

export default TaskCard;
