"use client";

import ViewAll from "@/features/dashboard/ViewAll";
import { Box, styled, TableContainer, Typography } from "@mui/material";
import React from "react";

interface PBillingList {
  label: string;
  amount: string;
  properties: number;
  color: string;
}

const BillingHome = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "59%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
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
          }}
        >
          <Typography>Billing</Typography>
        </Box>
        <ViewAll to="/property" label="View All" />
      </Box>
      {/* <BillingList
        label={label}
        amount={amount}
        properties={properties}
        color="#000000"
      /> */}
    </Box>
  );
};

const StatusText = styled(Typography)<{ color: string }>(({ color }) => ({
  fontSize: "16px",
  fontWeight: "bold",
  color: color,
}));

const AmountText = styled(Typography)({
  fontSize: "18px",
  fontWeight: "bold",
  color: "#000",
});

const PropertyText = styled(Typography)({
  fontSize: "14px",
  color: "#6B7280",
});

// const BillingList: React.FC<PBillingList> = ({
//   label,
//   amount,
//   properties,
//   color,
// }) => {
//   return (
//     <Box>
//       <TableContainer
//         sx={{
//           backgroundColor: "#ffffff",
//           padding: "12px 12px",
//           borderRadius: "6px",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             padding: "10px 20px",
//             borderRadius: "8px",
//             backgroundColor: "#FFFFFF",
//             width: "100%",
//             maxWidth: "400px",
//           }}
//         >
//           <Box>
//             <StatusText color={color}>{label}</StatusText>
//             <PropertyText>from {properties} properties</PropertyText>
//           </Box>
//           <AmountText>₱{amount.toLocaleString()}</AmountText>
//         </Box>
//       </TableContainer>
//     </Box>
//   );
// };

export default BillingHome;
