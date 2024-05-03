import TaskCard from '@/components/task-card';
import { Button } from '@/components/ui/button';

const AppPage = () => {
  return (
    <div className="m-auto max-w-xl">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-medium">Tasks</h2>
        <TaskCard />
        <Button>Add task</Button>
      </div>
    </div>
  );
};

export default AppPage;
