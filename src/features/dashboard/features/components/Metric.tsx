"use client";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

interface PMetricProps {
  title: string;
  properties: number;
  bgColor: string;
  IconComponent: React.ElementType;
}

const Bill1Container = styled(Box)({
  display: "flex",
  justifyContent: "start",
  backgroundColor: "#FFFFFF",
  width: "360px",
  height: "120px",
  borderRadius: "8px",
  padding: "0",
  alignItems: "center",
});

const IconContainer = styled(Box)<{ bgColor: string }>(({ bgColor }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "130px",
  borderRadius: "8px 0px 0px 8px",
  backgroundColor: bgColor,
}));

const Title = styled(Typography)({
  fontSize: "16px",
  fontWeight: "700",
  color: "#6B7280",
});

const MetricContainer = styled(Box)({
  display: "block",
  paddingLeft: "20px",
  alignItems: "center",
});

const Metric: React.FC<PMetricProps> = ({
  title,
  properties,
  bgColor,
  IconComponent,
}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Bill1Container>
        <IconContainer bgColor={bgColor}>
          <IconComponent />
        </IconContainer>
        <MetricContainer>
          <Title variant="h2">{title}</Title>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            {properties}
          </Box>
        </MetricContainer>
      </Bill1Container>
    </Box>
  );
};

const MetricGrid: React.FC = () => {
  const IconProperties = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      color="#5D87FF"
      width="50px"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
      />
    </svg>
  );

  const IconSpaces = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      color="#FFAE1F"
      width="50px"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
      />
    </svg>
  );

  const IconTenants = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      color="#13DEB9"
      width="50px"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    </svg>
  );

  const IconTicket = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      color="#FA896B"
      width="50px"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
      />
    </svg>
  );

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(360px, 1fr))"
      gap={2}
      padding={2}
      justifyContent="center"
      alignItems="center"
    >
      <Metric
        title="PROPERTIES"
        properties={5}
        bgColor="#ECF2FF"
        IconComponent={IconProperties}
      />
      <Metric
        title="SPACES"
        properties={11}
        bgColor="#FEF5E5"
        IconComponent={IconSpaces}
      />
      <Metric
        title="TENANTS"
        properties={9}
        bgColor="#E6FFFA"
        IconComponent={IconTenants}
      />
      <Metric
        title="TICKET"
        properties={9}
        bgColor="#FDEDE8"
        IconComponent={IconTicket}
      />
    </Box>
  );
};

const MetricDashboardPage: React.FC = () => {
  return <MetricGrid />;
};

export default MetricDashboardPage;
