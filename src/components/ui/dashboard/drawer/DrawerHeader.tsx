import { Stack, Toolbar } from "@mui/material";
import LogoWithText from "../../LogoWithText";
import theme from "@/lib/mui/theme";

const DrawerHeader = () => {
  return (
    <Toolbar
      sx={theme => ({
        zIndex: theme.zIndex.appBar + 1,
        backgroundColor: theme.palette.common.black,
        paddingRight: 2,
      })}
    >
      <Stack
        sx={{
          width: "100%",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          color: theme.palette.common.white,
          bgcolor: theme.palette.common.black,
          justifyContent: "space-between",
        }}
      >
        <LogoWithText />
      </Stack>
    </Toolbar>
  );
};

export default DrawerHeader;
