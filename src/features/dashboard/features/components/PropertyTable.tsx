"use client";

import {
  Stack,
  Typography,
  TableContainer as MuiTableContainer,
  Table as MuiTable,
} from "@mui/material";

import PropertyTableHeader from "./PropertyTableHeader";
import PropertyTableBody from "./PropertyBody";
import { usePropertyTable } from "../hooks/usePropertyTable";

const PropertyTable = () => {
  const { table } = usePropertyTable();

  return (
    <div>
      <Stack>
        <Typography variant="h6">Current Properties</Typography>
        <MuiTableContainer
          sx={{
            overflow: "auto",
            position: "relative",
            height: 715,
          }}
        >
          <MuiTable sx={{ display: "grid" }} component="div">
            <PropertyTableHeader table={table} />
            <PropertyTableBody table={table} />
          </MuiTable>
        </MuiTableContainer>
      </Stack>
    </div>
  );
};
export default PropertyTable;
