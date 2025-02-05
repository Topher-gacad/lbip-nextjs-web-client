import { Stack, Typography } from "@mui/material";
import Logo from "@/components/ui/Logo";

const LogoWithText = () => {
  return (
    <Stack sx={{ flexDirection: "row", gap: 1.5, alignItems: "center" }}>
      <Logo sx={{ fontSize: 28 }} />
      <Typography variant="h4">[Name]</Typography>
    </Stack>
  );
};

export default LogoWithText;
