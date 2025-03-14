import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

interface ViewAllProps {
  to: string;
  label: string;
  iconColor?: string; // Optional icon color prop
}

const ViewAll: React.FC<ViewAllProps> = ({
  to,
  label,
  iconColor = "#000000",
}) => {
  return (
    <Link href={to} passHref legacyBehavior>
      <Box
        component="a"
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#6B7280", // Gray color for text
          fontSize: "24px",
          fontWeight: 500,
          textDecoration: "none",
          cursor: "pointer",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        <Typography sx={{ color: "#000000" }}>{label}</Typography>
        <ArrowForwardIos
          sx={{
            fontSize: "16px",
            marginLeft: "4px",
            color: iconColor,
          }}
        />
      </Box>
    </Link>
  );
};

export default ViewAll;
