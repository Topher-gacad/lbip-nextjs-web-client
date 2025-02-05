import { menu } from "@/constant/drawer-menu/index";

import { useAuthenticatedUser } from "@/features/auth/api/useAuthenticatedUser";
export const useGetFilteredMenu = () => {
  const { data: user } = useAuthenticatedUser();
  const userPermissions = user?.data?.permissions ?? [];

  const hasPermission = (
    requiredPermission?: string[],
    matchExactPermission: boolean = false
  ) => {
    if (!requiredPermission || requiredPermission.length === 0) {
      return true;
    }

    const userPermissionNames = userPermissions.map(i => i.name);

    if (matchExactPermission) {
      return requiredPermission.every(permission =>
        userPermissionNames.includes(permission)
      );
    } else {
      return requiredPermission.some(permission =>
        userPermissionNames.includes(permission)
      );
    }
  };

  const filteredMenu = menu
    .map(group => ({
      ...group,
      children: group.children
        .filter(child =>
          hasPermission(child.requiredPermission, child.matchExactPermission)
        )
        .map(child => ({
          ...child,
          children: child.children?.filter(subChild =>
            hasPermission(
              subChild.requiredPermission,
              subChild.matchExactPermission
            )
          ),
        }))
        .filter(
          child =>
            child.type !== "collapse" ||
            (child.children && child.children.length > 0)
        ),
    }))
    .filter(group => group.children.length > 0);

  return filteredMenu;
};
