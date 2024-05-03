'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "riki",
    totalAmount: "100",
  },
  {
    invoice: "liangdi",
    totalAmount: "80",
  },
  {
    invoice: "soppro",
    totalAmount: "60",
  },
  {
    invoice: "wickkan",
    totalAmount: "40",
  }
]

export function TableDemo() {
  return (
    <div className="w-full max-w-[200px] mx-auto">
      <Table className="w-full table-fixed">
      <TableHeader>
        <TableRow>
          <TableHead className="w-3/4 p-1 text-left">Username</TableHead>
          <TableHead className="w-1/4 p-1 text-right">Points</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="p-1 text-left font-medium">{invoice.invoice}</TableCell>
            <TableCell className="p-1 text-right">{invoice.totalAmount}</TableCell>
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