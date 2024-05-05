import LeaderboardTable from '@/components/leaderboard';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const LeaderboardPage = () => {
  return (
    <div className="m-auto max-w-xl">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Leaderboard</h2>
          <Select>
            <SelectTrigger className="max-w-36">
              <SelectValue placeholder="Global" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="global">Global</SelectItem>
                <SelectItem value="university">University</SelectItem>
                <SelectItem value="friends">Friends</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <ScrollArea className="h-[42rem] rounded-md border">
          <LeaderboardTable />
        </ScrollArea>
      </div>
    </div>
  );
};

export default LeaderboardPage;
