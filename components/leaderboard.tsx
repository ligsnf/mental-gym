import { getUsers } from '@/db/queries/users';
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import goldMedal from "@/public/images/medals/gold.svg";
import silverMedal from "@/public/images/medals/silver.svg";
import bronzeMedal from "@/public/images/medals/bronze.svg";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export async function LeaderboardTable() {
  const users = await getUsers();

  return (
    <Table className="w-full h-[48rem] table-fixed text-lg overflow-y-auto no-scrollbar">
      <TableHeader className="sticky top-0 z-50 bg-background">
        <TableRow>
          <TableHead className="w-1/12 text-center">Rank</TableHead>
          <TableHead className="w-1/12 text-center"></TableHead>
          <TableHead className=" w-3/12 pl-6">Username</TableHead>
          <TableHead className=" w-3/12 pr-8 text-right">Points</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index}>
            <TableCell className="text-center">
              {index === 0 ? <Image src={goldMedal} alt="Gold Medal" width={36} height={36} className="ml-0.5 mb-0.5" />
                : index === 1 ? <Image src={silverMedal} alt="Silver Medal" width={36} height={36} className="ml-0.5 mb-0.5" />
                  : index === 2 ? <Image src={bronzeMedal} alt="Bronze Medal" width={36} height={36} className="ml-0.5 mb-0.5" />
                    : index + 1
              }
            </TableCell>
            <TableCell className="text-center">
              <Avatar className="hidden h-9 w-9 sm:flex justify-center">
                <AvatarImage src="https://www.gravatar.com/avatar/?d=identicon" alt="Avatar" />
                <AvatarFallback>{user.email?.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell className="pl-6 font-medium">{user.email}</TableCell>
            <TableCell className="pr-10 text-right font-mono">{user.total_time_spent} XP</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
      </TableFooter>
    </Table>
  );
}

export default LeaderboardTable;

