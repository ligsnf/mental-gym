'use client';

import { getTasks } from '@/db/queries/tasks';
import { useState } from 'react';
import TaskCard from './task-card';
import { Button } from './ui/button';

interface TaskListProps {
  tasks: Awaited<ReturnType<typeof getTasks>>;
}

const TaskList = ({ tasks }: TaskListProps) => {
  const [numOfLocalTasks, setNumOfLocalTasks] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      {tasks.map(({ task_id, task_title, progress }) => (
        <TaskCard
          key={task_id}
          taskId={task_id}
          title={task_title}
          progress={progress}
        />
      ))}
      {Array(numOfLocalTasks)
        .fill(0)
        .map((_, index) => (
          <TaskCard key={index} />
        ))}
      <Button
        onClick={() => setNumOfLocalTasks((numOfTasks) => numOfTasks + 1)}
      >
        Add task
      </Button>
    </div>
  );
};

export default TaskList;
