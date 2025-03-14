import RecentActivities from "@/features/dashboard/features/components/activities/RecentActivities";
import BillingHome from "@/features/dashboard/features/components/billing/BillingHome";
import MaintenanceRequest from "@/features/dashboard/features/components/maintenance/MaintenanceRequest";
import CurrentProperties from "@/features/dashboard/features/components/properties/CurrentProperties";
import MetricDashboardPage from "@/features/dashboard/features/components/properties/Metric";
import { Box } from "@mui/material";

const Metric = () => {
  return (
    <Box>
      <MetricDashboardPage />
      <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CurrentProperties />
          <MaintenanceRequest />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
        >
          <BillingHome />
          <RecentActivities />
        </Box>
      </Box>
    </Box>
  );
};
export default Metric;
