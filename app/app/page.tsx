import LockIn from '@/components/lock-in';
import TaskList from '@/components/task-list';
import { getTasks } from '@/db/queries/tasks';
import { auth } from '../auth';

const AppPage = async () => {
  const session = await auth();
  const tasks = await getTasks(session?.user?.email || '');
  console.log(tasks);

  return (
    <div className="m-auto min-w-[28rem] max-w-xl flex flex-col gap-6">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <LockIn />
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default AppPage;
