"use client";

import {
  Stack,
  TableContainer as MuiTableContainer,
  Table as MuiTable,
  Box,
} from "@mui/material";
import { useMaintenanceTable } from "../../hooks/maintenance/useMaintenanceTable";
import MaintenanceTableHeader from "./MaintenanceTableHeader";
import MaintenanceTableBody from "./MaintenanceBody";

const MaintenanceTable = () => {
  const { table } = useMaintenanceTable();

  return (
    <div>
      <Box>
        <Stack
          sx={{
            width: "100%",
          }}
        >
          <MuiTableContainer
            sx={{
              overflow: "auto",
              position: "relative",
              height: "100%",
            }}
          >
            <MuiTable sx={{ display: "grid" }} component="div">
              <MaintenanceTableHeader table={table} />
              <MaintenanceTableBody table={table} />
            </MuiTable>
          </MuiTableContainer>
        </Stack>
      </Box>
    </div>
  );
};
export default MaintenanceTable;
