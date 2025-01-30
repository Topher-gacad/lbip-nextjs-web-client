"use client";

import { ReactNode } from "react";
import MuiProvider from "./mui";

const AppProvider = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <MuiProvider>{children}</MuiProvider>;
};

export default AppProvider;
