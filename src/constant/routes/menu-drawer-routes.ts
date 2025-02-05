import DomainIcon from "@mui/icons-material/Domain";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import TableRowsIcon from "@mui/icons-material/TableRows";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { Action } from "@/constant/action";
import {
  DepartmentPermission,
  ScheduleTypePermission,
  ProjectPermission,
  RolePermission,
  SchedulePermission,
  UserPermission,
} from "@/constant/permissions";

import {
  departmentRoutes,
  scheduleTypeRoutes,
  projectRoutes,
  rolesAndPermissionRoutes,
  scheduleRoutes,
  userRoutes,
} from "@/constant/routes";

export const primaryMenu = [
  {
    label: "Users",
    path: userRoutes["index"],
    icon: BadgeIcon,
    permissions: [
      UserPermission[Action.ViewMany],
      UserPermission[Action.Create],
      UserPermission[Action.Update],
    ],
    children: [
      {
        label: "List",
        icon: TableRowsIcon,
        path: userRoutes[UserPermission[Action.ViewMany]],
        permissions: [UserPermission[Action.ViewMany]],
      },
      {
        label: "Create",
        icon: AddIcon,
        path: userRoutes[UserPermission[Action.Create]],

        permissions: [UserPermission[Action.Create]],
      },
      {
        label: "Edit",
        icon: EditIcon,
        path: userRoutes[UserPermission[Action.Update]],
        permissions: [UserPermission[Action.Update]],
      },
    ],
  },
  {
    label: "Roles and Permissions",
    path: rolesAndPermissionRoutes["index"],
    icon: BadgeIcon,
    permissions: [
      RolePermission[Action.ViewMany],
      RolePermission[Action.Create],
      RolePermission[Action.Update],
    ],
    children: [
      {
        label: "List",
        icon: TableRowsIcon,
        path: rolesAndPermissionRoutes[RolePermission[Action.ViewMany]],
        permissions: [RolePermission[Action.ViewMany]],
      },
      {
        label: "Create",
        icon: AddIcon,
        path: rolesAndPermissionRoutes[RolePermission[Action.Create]],

        permissions: [RolePermission[Action.Create]],
      },
      {
        label: "Edit",
        icon: EditIcon,
        path: rolesAndPermissionRoutes[RolePermission[Action.Update]],
        permissions: [RolePermission[Action.Update]],
      },
    ],
  },
  {
    label: "Projects",
    path: projectRoutes["index"],
    icon: CalendarMonthIcon,
    permissions: [
      ProjectPermission[Action.ViewMany],
      ProjectPermission[Action.Create],
      ProjectPermission[Action.Update],
    ],
    children: [
      {
        label: "List",
        icon: TableRowsIcon,
        path: projectRoutes[ProjectPermission[Action.ViewMany]],
        permissions: [ProjectPermission[Action.ViewMany]],
      },
      {
        label: "Create",
        icon: AddIcon,
        path: projectRoutes[ProjectPermission[Action.Create]],

        permissions: [ProjectPermission[Action.Create]],
      },
      {
        label: "Edit",
        icon: EditIcon,
        path: projectRoutes[ProjectPermission[Action.Update]],
        permissions: [ProjectPermission[Action.Update]],
      },
    ],
  },
  {
    label: "Schedules",
    path: scheduleRoutes["index"],

    icon: CalendarMonthIcon,
    permissions: [
      SchedulePermission[Action.ViewMany],
      SchedulePermission[Action.Create],
      SchedulePermission[Action.Update],
    ],
    children: [
      {
        label: "List",
        icon: TableRowsIcon,
        path: scheduleRoutes[SchedulePermission[Action.ViewMany]],
        permissions: [SchedulePermission[Action.ViewMany]],
      },
      {
        label: "Create",
        icon: AddIcon,
        path: scheduleRoutes[SchedulePermission[Action.Create]],
        permissions: [SchedulePermission[Action.Create]],
      },
      {
        label: "Edit",
        icon: EditIcon,
        path: scheduleRoutes[SchedulePermission[Action.Update]],
        permissions: [SchedulePermission[Action.Update]],
      },
    ],
  },
  {
    label: "Departments",
    path: departmentRoutes["index"],
    icon: DomainIcon,
    permissions: [
      DepartmentPermission[Action.ViewMany],
      DepartmentPermission[Action.Create],
      DepartmentPermission[Action.Update],
    ],
    children: [
      {
        label: "List",
        icon: TableRowsIcon,
        path: departmentRoutes[DepartmentPermission[Action.ViewMany]],
        permissions: [DepartmentPermission[Action.ViewMany]],
      },
      {
        label: "Create",
        icon: AddIcon,
        path: departmentRoutes[DepartmentPermission[Action.Create]],
        permissions: [DepartmentPermission[Action.Create]],
      },
      {
        label: "Edit",
        icon: EditIcon,
        path: departmentRoutes[DepartmentPermission[Action.Update]],
        permissions: [DepartmentPermission[Action.Update]],
      },
    ],
  },
  {
    label: "Schedule Types",
    path: scheduleTypeRoutes["index"],
    icon: DomainIcon,
    permissions: [
      ScheduleTypePermission[Action.ViewMany],
      ScheduleTypePermission[Action.Create],
      ScheduleTypePermission[Action.Update],
    ],
    children: [
      {
        label: "List",
        icon: TableRowsIcon,
        path: scheduleTypeRoutes[ScheduleTypePermission[Action.ViewMany]],
        permissions: [ScheduleTypePermission[Action.ViewMany]],
      },
      {
        label: "Create",
        icon: AddIcon,
        path: scheduleTypeRoutes[ScheduleTypePermission[Action.Create]],
        permissions: [ScheduleTypePermission[Action.Create]],
      },
      {
        label: "Edit",
        icon: EditIcon,
        path: scheduleTypeRoutes[ScheduleTypePermission[Action.Update]],
        permissions: [ScheduleTypePermission[Action.Update]],
      },
    ],
  },
];

export const secondaryMenu = [
  {
    label: "Profile",
    icon: AccountBoxOutlinedIcon,
    permissions: [
      UserPermission[Action.ViewMany],
      UserPermission[Action.Create],
      UserPermission[Action.Update],
    ],
    children: [
      {
        label: "List",
        icon: TableRowsIcon,
        path: userRoutes[UserPermission[Action.ViewMany]],
        permissions: [UserPermission[Action.ViewMany]],
      },
      {
        label: "Create",
        icon: AddIcon,
        path: userRoutes[UserPermission[Action.Create]],

        permissions: [UserPermission[Action.Create]],
      },
      {
        label: "Edit",
        icon: EditIcon,
        path: userRoutes[UserPermission[Action.Update]],
        permissions: [UserPermission[Action.Update]],
      },
    ],
  },
];
