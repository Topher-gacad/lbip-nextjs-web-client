"use client";

import { ReactNode, useMemo } from "react";
import { emptyAuth, useAuthenticatedUser } from "../api/useAuthenticatedUser";
import { roleEnum } from "../schema/auth";

type PPermissionGuard = {
  children: ReactNode;
  fallback?: ReactNode;
  requiredPermissions: string[];
};

const PermissionGuard = ({
  children,
  fallback = null,
  requiredPermissions,
}: PPermissionGuard) => {
  const {
    data: { data: auth } = { success: false, message: "", data: emptyAuth },
  } = useAuthenticatedUser();

  const roles = auth?.roles || [];
  const permissions = auth?.permissions || [];

  const isAuthorized = useMemo(() => {
    const hasAnyPermission = requiredPermissions.some(permission =>
      permissions.some(p => p.name === permission)
    );

    const isSuperAdmin = roles.some(
      role => role.name === roleEnum.Enum["super-admin"]
    );

    return hasAnyPermission || isSuperAdmin;
  }, [roles, permissions, requiredPermissions]);

  return isAuthorized ? <>{children}</> : <>{fallback}</>;
};

export default PermissionGuard;
