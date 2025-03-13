import React from "react";
import { Box, TableContainer, Typography } from "@mui/material";
import ViewAll from "../../../ViewAll";
import PropertyTable from "./PropertyTable";

const CurrentProperties: React.FC = () => {
  return (
    <Box sx={{ display: "block", width: "59%" }}>
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
        <Box sx={{ fontSize: "18px", fontWeight: 400, color: "#333" }}>
          <Typography>Current Properties</Typography>
        </Box>
        <ViewAll to="/property" label="View All" />
      </Box>
      <PropertyList />
    </Box>
  );
};

const PropertyList: React.FC = () => {
  return (
    <Box>
      <TableContainer
        sx={{
          backgroundColor: "#ffffff",
          padding: "12px 12px",
          borderRadius: "6px",
        }}
      >
        <PropertyTable />
      </TableContainer>
    </Box>
  );
};

export default CurrentProperties;

// <Box>
//   <Box>
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         fontSize: "18px",
//         fontWeight: 400,
//         color: "#333",
//       }}
//     >
//       <Typography>Current Properties</Typography>
//     </Box>
//     <ViewAll to="/property" label="View All" />

//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         width: "100%",
//         alignItems: "center",
//         padding: "12px 6px",
//       }}
//     >
//       <PropertyList />
//     </Box>
//   </Box>
// </Box>
