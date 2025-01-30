"use client";

import theme from "@/lib/mui/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";

const MuiProvider = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default MuiProvider;
