import LeaderboardTable from "@/components/leaderboard";
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const LeaderboardPage = () => {
  return (
    <div className="m-auto max-w-xl">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h2 className="text-4xl font-medium">Leaderboard</h2>
          <Select>
            <SelectTrigger className="w-[180px]">
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