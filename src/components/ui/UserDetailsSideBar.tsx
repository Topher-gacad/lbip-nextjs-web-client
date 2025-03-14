"use client";
import { Paper, Stack, Typography, Avatar, Box, Divider } from "@mui/material";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { emptyResponse, useGetSingleUserQuery } from "@/features/user/feature/list/hooks/useGetSingleUserQuery";
import UserIDLayoutSkeleton from "./userIDLayoutSkeleton";


type LinkType = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

type PUserDetailsSideBar = {
  userId?: string;
  links: LinkType[];
};

const UserDetailsSideBar = ({ userId, links }: PUserDetailsSideBar) => {
  const pathname = usePathname();

  const { data: { data: user } = {}, isLoading = { data: emptyResponse } } =
    useGetSingleUserQuery(userId || "");

  if (isLoading) {
    return <UserIDLayoutSkeleton />;
  }

  return (
    <Paper
      sx={{
        height: "500px",
        boxSizing: "border-box",
        border: theme => `1px solid ${theme.palette.divider}`,
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: 0,
        p: 2,
      }}
      elevation={0}
    >
      <Stack sx={{ flex: 1, mt: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 3,
            pb: 2,
          }}
        >
          <Avatar
            sx={{
              width: 100,
              height: 100,
              bgcolor: theme => theme.palette.primary.dark,
            }}
            alt=""
            src=""
          />
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="h4">
              {user?.profile?.first_name && user?.profile?.last_name
                ? `${user?.profile.first_name} ${user?.profile.last_name}`
                : ""}
            </Typography>

            <Typography variant="h6" color="secondary">
              {user?.roles?.map(role => role.name).join(', ') || ""}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Stack sx={{ width: "100%", mt: 2 }}>
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  fontSize: "normal",
                  py: 1.5,
                  px: 2,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor:
                    pathname === link.href
                      ? theme => theme.palette.primary.lighter
                      : "inherit",
                  "&:hover": {
                    backgroundColor: theme => theme.palette.primary.lighter,
                    "& *": {
                      color: theme => theme.palette.common.black,
                    },
                  },
                  color:
                    pathname === link.href
                      ? theme => theme.palette.common.black
                      : "black",
                  "& *": {
                    color:
                      pathname === link.href
                        ? theme => theme.palette.common.black
                        : "black",
                  },
                }}
              >
                {link.icon}
                <Typography>{link.label}</Typography>
              </Box>
            </Link>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default UserDetailsSideBar;