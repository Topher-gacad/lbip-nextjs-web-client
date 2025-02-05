"use client";

import { RouteLayout } from "@/types/layout-type";

const ProfileLayout = ({ children }: RouteLayout) => {
  return (
    <div>
      <p>profile layout </p>
      <div>{children}</div>
    </div>
  );
};

export default ProfileLayout;
