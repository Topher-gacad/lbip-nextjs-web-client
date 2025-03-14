import React from "react";
import { Box, TableContainer, Typography } from "@mui/material";
import ViewAll from "../../../ViewAll";
import MaintenanceTable from "./MaintenanceTable";
import theme from "@/lib/mui/theme";

const MaintenanceRequest = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
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
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: theme.typography.fontWeightRegular,
              color: "#333",
            }}
          >
            Maintenance Request
          </Typography>
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
