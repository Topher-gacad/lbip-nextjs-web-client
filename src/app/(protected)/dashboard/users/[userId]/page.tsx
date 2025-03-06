"use client";

import UserDetails from "@/components/ui/user-details/UserDetails";
import UserDetailsSkeleton from "@/components/ui/user-details/UserDetailsSkeleton";
import { UserPermission } from "@/constant";
import withPermission from "@/features/auth/components/withPermission";
import { useGetSingleUserQuery } from "@/features/user/feature/list/hooks/useGetSingleUserQuery";
import { Typography } from "@mui/material";
import { useParams } from "next/navigation";

const DetailsPage = () => {
  const { userId } = useParams();
  const id = userId as string;

  const {
    data: { data: user } = {},
    isLoading,
    isError,
  } = useGetSingleUserQuery(id);

  if (isError) {
    return (
      <Typography align="center" color="error">
        Failed to load user details
      </Typography>
    );
  }

  if (isLoading) {
    return <UserDetailsSkeleton />;
  }

  if (user) {
    return <UserDetails user={user} />;
  }
  return <div>DetailsPage</div>;
};
export default withPermission(DetailsPage, {
  requiredPermissions: [UserPermission.ViewAny],
});
