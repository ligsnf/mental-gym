import { getUsers } from '@/db/queries/users';

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

  console.log(users)
  return (
    <div className="w-full max-w-[500px] mx-auto">
      <Table className="w-full table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-full p-1 text-left">Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="p-1 text-left font-medium">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default TableDemo;

