'use client';

import { useState } from 'react';
import TaskCard from './task-card';
import { Button } from './ui/button';

const TaskList = () => {
  const [numOfTasks, setNumOfTasks] = useState(1);

  return (
    <div className="flex flex-col gap-2">
      {Array(numOfTasks)
        .fill(0)
        .map((_, index) => (
          <TaskCard key={index} />
        ))}
      <Button onClick={() => setNumOfTasks((numOfTasks) => numOfTasks + 1)}>
        Add task
      </Button>
    </div>
  );
};

export default TaskList;
