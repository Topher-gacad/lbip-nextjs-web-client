"use client";

import ViewAll from "@/features/dashboard/ViewAll";
import theme from "@/lib/mui/theme";
import { Box, styled, TableContainer, Typography } from "@mui/material";
import { useGetRecentActivitiesQuery } from "../../hooks/activities/useGetRecentActivitiesQuery";

interface PRecentActivities {
  time: number;
  image: string;
  title: string;
  subtitle: string;
}

const RecentActivities = () => {
  const { data } = useGetRecentActivitiesQuery();

  const activityData = [
    {
      time: Number(data?.data?.time),
      image: String(data?.data?.image),
      title: String(data?.data?.title),
      subtitle: String(data?.data?.title),
    },
    {
      time: Number(data?.data?.time),
      image: String(data?.data?.image),
      title: String(data?.data?.title),
      subtitle: String(data?.data?.title),
    },
    {
      time: Number(data?.data?.time),
      image: String(data?.data?.image),
      title: String(data?.data?.title),
      subtitle: String(data?.data?.title),
    },
    {
      time: Number(data?.data?.time),
      image: String(data?.data?.image),
      title: String(data?.data?.title),
      subtitle: String(data?.data?.title),
    },
    {
      time: Number(data?.data?.time),
      image: String(data?.data?.image),
      title: String(data?.data?.title),
      subtitle: String(data?.data?.title),
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
          Recent Activities
        </Typography>
      </Box>

      {activityData.length > 0 ? (
        activityData.map((activityItem, index) => (
          <RecentActivitiesList key={index} {...activityItem} />
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
            <Typography>No Recent Activities </Typography>
          </Box>
        </TableContainer>
      )}
    </Box>
  );
};

const Time = styled(Typography)({
  fontSize: "16px",
  fontWeight: theme?.typography?.fontWeightRegular,
});

const Image = styled(Box)({
  fontSize: "18px",
});

const Title = styled(Typography)({
  fontSize: "18px",
  fontWeight: theme.typography.fontWeightBold,
});

const Subtitle = styled(Typography)({
  fontSize: "14px",
  fontWeight: theme.typography.fontWeightRegular,
});

const RecentActivitiesList: React.FC<PRecentActivities> = ({
  time,
  image,
  title,
  subtitle,
}) => {
  return (
    <Box>
      <TableContainer
        sx={{
          backgroundColor: "#FEFEFE",
          padding: "8px",
          borderRadius: "6px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 90px 10px 40px",
            borderRadius: "8px",
            backgroundColor: "#FEFEFE",
            width: "100%",
          }}
        >
          <Time>{time}</Time>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image>
              <img
                src={image}
                alt={title}
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
              />
            </Image>
            <Box sx={{}}>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </Box>
          </Box>
        </Box>
      </TableContainer>
    </Box>
  );
};

export default RecentActivities;
