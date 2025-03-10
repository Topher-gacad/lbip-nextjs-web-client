"use client";

import { Fragment } from "react";
import withAuth from "@/features/auth/components/withAuth";
import { RouteLayout } from "@/types/layout-type";
import { Container } from "@mui/material";

const ProtectedRoutes = ({ children }: RouteLayout) => {
  return <Fragment>{children}</Fragment>;
};

export default withAuth(ProtectedRoutes);
