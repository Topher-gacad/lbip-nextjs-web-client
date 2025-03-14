"use client";

import {
  Stack,
  TableContainer as MuiTableContainer,
  Table as MuiTable,
  Box,
} from "@mui/material";

import PropertyTableHeader from "./PropertyTableHeader";
import PropertyTableBody from "./PropertyBody";
import { usePropertyTable } from "../../hooks/properties/usePropertyTable";

const PropertyTable = () => {
  const { table } = usePropertyTable();

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
              <PropertyTableHeader table={table} />
              <PropertyTableBody table={table} />
            </MuiTable>
          </MuiTableContainer>
        </Stack>
      </Box>
    </div>
  );
};
export default PropertyTable;
