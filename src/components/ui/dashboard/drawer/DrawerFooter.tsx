import { useAuthenticatedUser } from "@/features/auth/api/useAuthenticatedUser";
import LogoutButton from "@/features/auth/components/LogoutButton";
import { getNameInitials } from "@/utils";
import { Avatar, Box, Stack, Toolbar, Typography } from "@mui/material";
import { common } from "@mui/material/colors";

const DrawerFooter = () => {
  const { data } = useAuthenticatedUser();
  const firstRoleNameElement =
    data?.data?.roles?.[0].name || "No role assigned";

  return (
    <Toolbar
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        zIndex: theme => theme.zIndex.appBar + 1,
        backgroundColor: theme => theme.palette.common.black,
      }}
    >
      <Box>
        <Avatar
          sx={{
            bgcolor: theme => theme.palette.primary.dark,
            fontSize: "0.875rem",
          }}
        >
          {getNameInitials(
            data?.data?.profile.first_name,
            data?.data?.profile.last_name
          )}
        </Avatar>
      </Box>
      <Stack sx={{ flexDirection: "column", gap: 0, lineHeight: 1 }}>
        <Typography
          variant="subtitle1"
          sx={{
            maxWidth: "120px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 1.2,
            color: common.white,
            mb: 0,
          }}
        >
          {data?.data?.profile.first_name && data?.data?.profile.last_name
            ? `${data?.data?.profile.first_name} ${data?.data?.profile.last_name}`
            : ""}
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            maxWidth: "200px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: common.white,
            lineHeight: 1.2,
            mt: 0,
          }}
        >
          {firstRoleNameElement}
        </Typography>
      </Stack>
      <Box sx={{ ml: "auto" }}>
        <LogoutButton />
      </Box>
    </Toolbar>
  );
};

export default DrawerFooter;
