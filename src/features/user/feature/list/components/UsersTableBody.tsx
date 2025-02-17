"use client";

import { TUserProfileSchema } from "@/features/user/schema/user";
import {
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  TableRow as MuiTableRow,
} from "@mui/material";
import { flexRender, Table } from "@tanstack/react-table";
import { FixedSizeList as List } from "react-window";

type TableBodyProps = {
  table: Table<TUserProfileSchema>;
};

const UsersTableBody = ({ table }: TableBodyProps) => {
  const rows = table.getRowModel().rows;

  return (
    <MuiTableBody component="div" sx={{ 
        color: "#1E1E1E"
     }}>
      <List height={600} itemCount={rows.length} itemSize={60} width={"100%"}>
        {({ index, style }) => {
          const row = rows[index];
          const cells = row.getVisibleCells();

          return (
            <MuiTableRow
              component="div"
              key={row.id}
              selected={row.getIsSelected()}
              style={style}
            >
              {cells.map(cell => {
                return (
                  <MuiTableCell
                    component="div"
                    sx={{
                      maxWidth: cell.column.getSize(),
                      width: cell.column.getSize(),
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </MuiTableCell>
                );
              })}
            </MuiTableRow>
          );
        }}
      </List>
    </MuiTableBody>
  );
};

export default UsersTableBody;
