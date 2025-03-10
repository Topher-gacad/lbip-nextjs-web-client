import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
} from "@mui/material";
import { VisibilityOutlined } from "@mui/icons-material";
import ViewAll from "../../ViewAll";

const CurrentProperties: React.FC = () => {
  return (
    <Box sx={{ display: "block", width: "59%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          padding: "12px 6px",
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
  const properties = [
    { name: "Maple Apartments", availableSpaces: "3/4", ticketCount: 3 },
    { name: "Oakwood Residences", availableSpaces: "1/2", ticketCount: 5 },
    { name: "Pineview Tower", availableSpaces: "3/3", ticketCount: 0 },
    { name: "Cedar Heights", availableSpaces: "1/1", ticketCount: 2 },
    { name: "Birchwood Villas", availableSpaces: "1/1", ticketCount: 1 },
  ];
  return (
    <Box>
      <TableContainer
        sx={{
          backgroundColor: "#ffffff",
          padding: "12px 12px",
          borderRadius: "6px",
        }}
      >
        <Table sx={{ minWidth: 910 }} aria-label="property table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "none",
                  color: "#6B7280",
                  padding: "12px 12px 12px 24px",
                }}
              >
                Property
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  color: "#6B7280",
                  padding: "12px 12px 12px 24px",
                }}
              >
                Space
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  color: "#6B7280",
                  padding: "12px 12px 12px 24px",
                }}
              >
                Ticket
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  color: "#6B7280",
                  padding: "12px 12px 12px 24px",
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {properties.map((property, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    borderBottom: "none",
                    padding: "0px 24px 8px 24px",
                  }}
                >
                  {property.name}
                </TableCell>
                <TableCell
                  sx={{ borderBottom: "none", padding: "0px 24px 8px 24px" }}
                >
                  {property.availableSpaces} Spaces Available
                </TableCell>
                <TableCell
                  sx={{ borderBottom: "none", padding: "0px 24px 8px 24px" }}
                >
                  {property.ticketCount} Tickets
                </TableCell>
                <TableCell
                  sx={{ borderBottom: "none", padding: "2px 24px 8px 24px" }}
                >
                  <IconButton
                    sx={{
                      color: "#5E72E4",
                    }}
                  >
                    <VisibilityOutlined />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
