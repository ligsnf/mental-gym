import { getUsers } from '@/db/queries/users';
import { ChevronRight } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export async function TableDemo() {
  const users = await getUsers(); 

  return (
    <div className="w-full max-w-[500px] mx-auto overflow-hidden">
      <Table className="w-full table-fixed text-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2 p-2 text-left">Username</TableHead>
            <TableHead className="w-1/2 p-2 text-right">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="p-2 text-left font-medium">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
            <Button variant="outline" size="icon" >
              <ChevronRight className="h-4 w-4 text-right" />
            </Button>
        </TableFooter>
      </Table>
    </div>
  );
}

export default LeaderboardTable;

