"use client";

import UserDetailsSkeleton from "@/components/ui/user-details/UserDetailsSkeleton";
import { Typography } from "@mui/material";

import { useParams } from "next/navigation";

import withPermission from "@/features/auth/components/withPermission";
import { useGetSingleUserQuery } from "@/features/user/feature/list/hooks/useGetSingleUserQuery";
import ChangeUserAccountPassword from "@/components/ui/ChangeUserAccountPassword";

const ChangePasswordPage = () => {
  const { userId } = useParams();
  const id = userId as string;

  const { data: { data: user } = {}, isLoading, isError } = useGetSingleUserQuery(id);

  if (isError) {
    return (
      <Typography align="center" color="error">
        Failed to load profile details.
      </Typography>
    );
  }

  if (isLoading) {
    return <UserDetailsSkeleton />;
  }

  if (user) {
    return <ChangeUserAccountPassword user={user} />;
  }
};
export default withPermission(ChangePasswordPage, {
  requiredPermissions: [],
  requireAll: true,
});