"use client";

import { ReactNode } from "react";

const GuestLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  // TODO: Authentication

  return <div>{children}</div>;
};

export default GuestLayout;
