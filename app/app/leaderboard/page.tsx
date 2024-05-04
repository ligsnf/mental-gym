import TableDemo from "@/components/leaderboard";
import { Table } from "@/components/ui/table";

const LeaderboardPage = () => {
  return (
    <div className="m-auto max-w-xl">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-medium">Leaderboard</h2>
        <TableDemo />
      </div>
    </div>
  );
};

export default LeaderboardPage;