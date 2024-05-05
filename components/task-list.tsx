'use client';

import { getTasks } from '@/db/queries/tasks';
import { useState } from 'react';
import TaskCard from './task-card';
import { Button } from './ui/button';

interface TaskListProps {
  tasks: Awaited<ReturnType<typeof getTasks>>;
}

const TaskList = ({ tasks }: TaskListProps) => {
  const [numOfTasks, setNumOfTasks] = useState(1);

  const handleAddTask = () => {
    setNumOfTasks((numOfTasks) => numOfTasks + 1);
  };

  return (
    <div className="flex flex-col gap-2">
      {tasks.map(({ task_id, task_title }) => (
        <TaskCard key={task_id} title={task_title} />
      ))}
      <Button onClick={handleAddTask}>Add task</Button>
    </div>
  );
};

export default TaskList;
