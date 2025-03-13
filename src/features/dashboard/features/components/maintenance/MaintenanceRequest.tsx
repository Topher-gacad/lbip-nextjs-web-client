import React from "react";
import { Box, TableContainer, Typography } from "@mui/material";
import ViewAll from "../../../ViewAll";
import MaintenanceTable from "./MaintenanceTable";

const MaintenanceRequest = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "59%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "50%",
          alignItems: "center",
          padding: "12px 6px",
          borderBottom: "none",
          borderRadius: 6,
        }}
      >
        <Box
          sx={{
            fontSize: "18px",
            fontWeight: 400,
            color: "#333",
            mt: 2,
          }}
        >
          <Typography>Maintenance Request</Typography>
        </Box>
        <ViewAll to="/property" label="View All" />
      </Box>
      <MaintenanceList />
    </Box>
  );
};

const MaintenanceList = () => {
  return (
    <Box>
      <TableContainer
        sx={{
          backgroundColor: "#ffffff",
          padding: "12px 12px",
          borderRadius: "6px",
        }}
      >
        <MaintenanceTable />
      </TableContainer>
    </Box>
  );
};

export default MaintenanceRequest;
