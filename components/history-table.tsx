import React from 'react'
import { MoreHorizontal } from 'lucide-react'

import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader
} from '~/components/ui/table'

export const HistoryTable = (): JSX.Element => {
  return (
    <Table className="custom-scrollbar mt-2 overflow-hidden rounded-xl">
      <TableHeader>
        <TableRow>
          <TableHead>CONTACT ADDRESS</TableHead>
          <TableHead>PERCENTAGE</TableHead>
          <TableHead>PROFIT/LOSS</TableHead>
          <TableHead>LIQUIDITY</TableHead>
          <TableHead>DATE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-white">0x570A5D26f7765Ecb712C0924E4De545B89fD43dF</TableCell>
          <TableCell>12,5%</TableCell>
          <TableCell className="text-white">-12,4 SOL</TableCell>
          <TableCell className="text-white">112,450</TableCell>
          <TableCell className="flex items-center space-x-2">
            <span> 17 Jul, 20:23</span> <MoreHorizontal role="button" className="cursor-pointer" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
