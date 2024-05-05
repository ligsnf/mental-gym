import LockIn from '@/components/lock-in';
import TaskList from '@/components/task-list';
import { Card } from '@tremor/react';

const AppPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <Card>
        <LockIn />
      </Card>
      <div className="w-[36rem] space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
        <TaskList />
      </div>
    </div>
  );
};

export default AppPage;
