"use client";

import {
  TableBody as MuiTableBody,
  TableCell as MuiTableCell,
  TableRow as MuiTableRow,
} from "@mui/material";
import { flexRender, Table } from "@tanstack/react-table";
import { FixedSizeList as List } from "react-window";
import { TMaintenance } from "@/features/dashboard/schema/maintenance";

type TableBodyProps = {
  table: Table<TMaintenance>;
};

const MaintenanceTableBody = ({ table }: TableBodyProps) => {
  const rows = table.getRowModel().rows;

  return (
    <MuiTableBody component="div">
      <List height={300} itemCount={rows.length} itemSize={60} width={"100%"}>
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
                      backgroundColor: "#fefefe",
                      borderRadius: 15,
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

export default MaintenanceTableBody;
