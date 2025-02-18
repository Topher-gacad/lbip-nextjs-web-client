"use client";

import {
  Stack,
  Typography,
  TableContainer as MuiTableContainer,
  Table as MuiTable,
} from "@mui/material";
import { useRolesTable } from "../hooks/useRolesTable";
import RolesTableBody from "./RolesTableBody";
import RolesTableHeader from "./RolesTableHeader";

const RolesTable = () => {
  const { table } = useRolesTable();

  return (
    <div>
      <Stack>
        <Typography variant="h3">Roles Table</Typography>
        <MuiTableContainer
          sx={{ overflow: "auto", position: "relative", height: 715 }}
        >
          <MuiTable sx={{ display: "grid" }} component="div">
            <RolesTableHeader table={table} />
            <RolesTableBody table={table} />
          </MuiTable>
        </MuiTableContainer>
      </Stack>
    </div>
  );
};
export default RolesTable;
