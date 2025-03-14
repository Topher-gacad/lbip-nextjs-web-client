"use client";

import Error from "@/components/error/Error";
import EditRoleForm from "@/features/roles/features/list/components/EditRoleForm";
import { useGetRoleQuery } from "@/features/roles/features/list/hooks/useGetRoleQuery";
import RoleLoadingSkeleton from "@/features/roles/RoleLoadingSkeleton";
import { useParams } from "next/navigation";

const RolePage = () => {
  const { roleId } = useParams();

  const {
    data: role,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetRoleQuery((roleId as string) || "");

  if (!roleId) {
    return <RoleLoadingSkeleton />;
  }

  if (isFetching) {
    return <RoleLoadingSkeleton />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  if (isSuccess) {
    return <EditRoleForm role={role.data} />;
  }

  return null;
};

export default RolePage;
