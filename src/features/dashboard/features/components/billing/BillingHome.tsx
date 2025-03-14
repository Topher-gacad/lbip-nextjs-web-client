"use client";

import ViewAll from "@/features/dashboard/ViewAll";
import theme from "@/lib/mui/theme";
import { Box, styled, TableContainer, Typography } from "@mui/material";
import React from "react";
import { useGetBillingQuery } from "../../hooks/billing/useGetBillingQuery";

interface PBillingList {
  label: string;
  amount: number;
  properties: number;
  color: string;
}

const BillingHome = () => {
  const { data } = useGetBillingQuery();

  // Ensure API response structure is correct
  const billingData = [
    {
      label: "Collected",
      amount: Number(data?.data?.collected?.amount) || 0,
      properties: Number(data?.data?.collected?.properties) || 0,
      color: "#8CD98C",
    },
    {
      label: "Pending",
      amount: Number(data?.data?.pending?.amount) || 0,
      properties: Number(data?.data?.pending?.properties) || 0,
      color: "#54B4D3",
    },
    {
      label: "Overdue",
      amount: Number(data?.data?.overdue?.amount) || 0,
      properties: Number(data?.data?.overdue?.properties) || 0,
      color: "#F07575",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
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
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: theme.typography.fontWeightRegular,
            color: "#333",
          }}
        >
          Billing
        </Typography>
        <ViewAll to="/property" label="View All" />
      </Box>

      {billingData.length > 0 ? (
        billingData.map((billingItem, index) => (
          <BillingList key={index} {...billingItem} />
        ))
      ) : (
        <TableContainer
          sx={{
            backgroundColor: "#ffffff",
            padding: "12px",
            borderRadius: "6px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: "8px",
              backgroundColor: "#FEFEFE",
              width: "100%",
            }}
          >
            <Typography>No Billing Available</Typography>
          </Box>
        </TableContainer>
      )}
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
  fontWeight: theme.typography.fontWeightBold,
  color: "#000",
});

const PropertyText = styled(Typography)({
  fontSize: "14px",
  color: "#6B7280",
});

const BillingList: React.FC<PBillingList> = ({
  label,
  amount,
  properties,
  color,
}) => {
  return (
    <Box>
      <TableContainer
        sx={{
          backgroundColor: "#ffffff",
          padding: "12px 12px",
          borderRadius: "6px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 20px",
            borderRadius: "8px",
            backgroundColor: "#FEFEFE",
            width: "100%",
          }}
        >
          <Box>
            <StatusText color={color}>{label}</StatusText>
            <PropertyText>from {properties} properties</PropertyText>
          </Box>
          <AmountText>₱{amount.toLocaleString()}</AmountText>
        </Box>
      </TableContainer>
    </Box>
  );
};

export default BillingHome;
