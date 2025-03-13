import BillingHome from "@/features/dashboard/features/components/billing/BillingHome";
import MaintenanceRequest from "@/features/dashboard/features/components/maintenance/MaintenanceRequest";
import CurrentProperties from "@/features/dashboard/features/components/properties/CurrentProperties";
import MetricDashboardPage from "@/features/dashboard/features/components/properties/Metric";
import { Box, Stack } from "@mui/material";

const Metric = () => {
  return (
    <Box>
      <MetricDashboardPage />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
        }}
      >
        <CurrentProperties />
        <BillingHome />
      </Box>

      <Stack>
        <MaintenanceRequest />
      </Stack>
    </Box>
  );
};
export default Metric;
