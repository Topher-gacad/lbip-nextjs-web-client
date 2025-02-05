import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import { SvgIconProps } from "@mui/material";
import { ComponentType } from "react";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {
  DepartmentPermission,
  JobTitlePermission,
  ProjectPermission,
  RolePermission,
  SchedulePermission,
  ScheduleTypePermission,
  UserPermission,
} from "@/constant/permissions";

type MenuGroupItemChildren = {
  id: string;
  title: string;
  url: string;
  requiredPermission?: string[];
  matchExactPermission?: boolean;
};

type MenuGroupItem = {
  id: string;
  title: string;
  icon: ComponentType<SvgIconProps>;
  type: "collapse" | "item";
  url: string;
  target?: boolean;
  requiredPermission?: string[];
  children?: MenuGroupItemChildren[];
  isUrlCheckedEndsWith?: boolean;
  matchExactPermission?: boolean;
  description?: string;
};

export type MenuGroup = {
  id: string;
  title: string;
  type: "group";
  children: MenuGroupItem[];
  description?: string;
};

const dashboard: MenuGroup = {
  id: "dashboard",
  title: "Dashboard",
  type: "group",
  children: [
    {
      id: "home",
      title: "Home",
      type: "item",
      url: "/dashboard",
      icon: HomeOutlinedIcon,
      isUrlCheckedEndsWith: true,
      description: "Default page",
    },
    {
      id: "user",
      title: "Users",
      type: "collapse",
      url: "/dashboard/users",
      icon: PeopleOutlinedIcon,
      description: "You can manage and view the users table here",
      children: [
        {
          id: "user-list",
          title: "List",
          url: "/dashboard/users",
          requiredPermission: [UserPermission.ViewMany],
        },
        {
          id: "user-create",
          title: "Create",
          url: "/dashboard/users/create",
          requiredPermission: [UserPermission.Create],
        },
        {
          id: "user-import",
          title: "Import",
          url: "/dashboard/users/import",
          requiredPermission: [UserPermission.Import],
        },
      ],
    },
    {
      id: "project",
      title: "Projects",
      type: "collapse",
      url: "/dashboard/projects",
      icon: AssignmentOutlinedIcon,
      description: "You can manage and view the projects table here",
      children: [
        {
          id: "project-list",
          title: "List",
          url: "/dashboard/projects",
          requiredPermission: [ProjectPermission.ViewMany],
        },
        {
          id: "project-create",
          title: "Create",
          url: "/dashboard/projects/create",
          requiredPermission: [ProjectPermission.Create],
        },
        {
          id: "project-import",
          title: "Import",
          url: "/dashboard/projects/import",
          requiredPermission: [ProjectPermission.Import],
        },
      ],
    },
    {
      id: "schedule",
      title: "Schedules",
      url: "/dashboard/schedules",
      type: "collapse",
      icon: CalendarMonthOutlinedIcon,
      description: "You can manage and view the schedules table here",
      children: [
        {
          id: "schedules-list",
          title: "List",
          url: "/dashboard/schedules",
          requiredPermission: [SchedulePermission.ViewMany],
        },
        {
          id: "schedule-daily-view",
          title: "Daily View",
          url: "/dashboard/schedules/daily-view",
          requiredPermission: [SchedulePermission.ViewMany],
        },
        {
          id: "schedule-import",
          title: "Import",
          url: "/dashboard/schedules/import",
          requiredPermission: [SchedulePermission.Import],
        },
      ],
    },
  ],
};

const manage: MenuGroup = {
  id: "manage",
  title: "Manage",
  type: "group",
  children: [
    {
      id: "department",
      title: "Departments",
      url: "/dashboard/departments",
      type: "item",
      icon: CorporateFareOutlinedIcon,
      requiredPermission: [
        DepartmentPermission.ViewMany,
        DepartmentPermission.Create,
        DepartmentPermission.Update,
        DepartmentPermission.SoftDelete,
      ],
      matchExactPermission: true,
      description: "You can manage and view the departments table here",
    },
    {
      id: "schedule-types",
      title: "Schedule Types",
      url: "/dashboard/schedule-types",
      type: "item",
      icon: ScheduleOutlinedIcon,
      requiredPermission: [
        ScheduleTypePermission.ViewMany,
        ScheduleTypePermission.Create,
        ScheduleTypePermission.Update,
        ScheduleTypePermission.SoftDelete,
      ],
      matchExactPermission: true,
      description: "You can manage and view the schedule types table here",
    },
    {
      id: "job-titles",
      title: "Job Titles",
      url: "/dashboard/job-titles",
      type: "item",
      icon: BadgeOutlinedIcon,
      requiredPermission: [
        JobTitlePermission.ViewMany,
        JobTitlePermission.Create,
        JobTitlePermission.Update,
        JobTitlePermission.SoftDelete,
      ],
      matchExactPermission: true,
      description: "You can manage and view the job titles table here",
    },
    {
      id: "roles-and-permissions",
      title: "Roles and Permissions",
      url: "/dashboard/roles",
      type: "item",
      icon: AdminPanelSettingsOutlinedIcon,
      requiredPermission: [
        RolePermission.ViewMany,
        RolePermission.Create,
        RolePermission.Update,
        RolePermission.HardDelete,
      ],
      matchExactPermission: true,
      description: "You can manage and view the roles table here",
    },
  ],
};

const account: MenuGroup = {
  id: "Account",
  title: "Account",
  type: "group",
  children: [
    {
      id: "profile",
      title: "Profile",
      type: "item",
      url: "/dashboard/profile",
      icon: PersonOutlineOutlinedIcon,
      description: "You can view your account details here",
    },
  ],
};

type Menu = MenuGroup[];

export const menu: Menu = [dashboard, manage, account];
