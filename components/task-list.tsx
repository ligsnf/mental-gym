'use client';

import { useState } from 'react';
import { toast } from "sonner";
import TaskCard from './task-card';
import { Button } from './ui/button';

const TaskList = () => {
  const [numOfTasks, setNumOfTasks] = useState(1);

  const handleAddTask = () => {
    setNumOfTasks((numOfTasks) => numOfTasks + 1);
    toast.success("Task added");
  };

  return (
    <div className="flex flex-col gap-2">
      {Array(numOfTasks)
        .fill(0)
        .map((_, index) => (
          <TaskCard key={index} />
        ))}
      <Button onClick={handleAddTask}>
        Add task
      </Button>
    </div>
  );
};

export default TaskList;
