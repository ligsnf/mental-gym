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
import { Button } from "@/components/ui/button"


export async function TableDemo() {
  const users = await getUsers(); 

  // Only select the first 10 users to display
  const topTenUsers = users.slice(0, 20);


  console.log(users)
  return (
    <div className="w-full max-w-[500px] mx-auto overflow-hidden ">
      <Table className="w-full table-fixed text-lg">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/2 p-2 text-left">Username</TableHead>
            <TableHead className="w-1/2 p-2 text-right">Experience</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {topTenUsers.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="p-2 text-left font-medium">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>          
        </TableFooter>
      </Table>
    </div>
  );
}

export default TableDemo;

