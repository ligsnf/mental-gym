import LockIn from '@/components/lock-in';
import TaskList from '@/components/task-list';

const AppPage = () => {
  return (
    <div className="m-auto max-w-xl flex flex-col gap-6">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <LockIn />
      <div className="w-[36rem] space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
        <TaskList />
      </div>
    </div>
  );
};

export default AppPage;
