import TaskList from '@/components/task-list';

const AppPage = () => {
  return (
    <div className="m-auto max-w-xl">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-medium">Tasks</h2>
        <TaskList />
      </div>
    </div>
  );
};

export default AppPage;
