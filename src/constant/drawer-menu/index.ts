import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { SvgIconProps } from "@mui/material";
import { ComponentType } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { RolePermission, UserPermission } from "@/constant/permissions";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";

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
  title: "DASHBOARD",
  type: "group",
  children: [
    {
      id: "dashboard",
      title: "Dashboard",
      type: "item",
      url: "/dashboard",
      icon: SignalCellularAltRoundedIcon,
      isUrlCheckedEndsWith: true,
      description: "Default page",
    },
  ],
};

const modules: MenuGroup = {
  id: "modules",
  title: "MODULES",
  type: "group",
  children: [
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
      id: "property",
      title: "Property",
      type: "item",
      url: "/dashboard/property",
      icon: MapsHomeWorkOutlinedIcon,
      description: "You can view your account details here",
    },
    {
      id: "billing",
      title: "Billing",
      type: "item",
      url: "/dashboard/billing",
      icon: CreditCardOutlinedIcon,
      description: "You can view your account details here",
    },
    {
      id: "maintenance",
      title: "Maintenance",
      type: "item",
      url: "/dashboard/maintenance",
      icon: BuildOutlinedIcon,
      description: "You can view your account details here",
    },
  ],
};

const account: MenuGroup = {
  id: "Account",
  title: "ACCOUNT",
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
    {
      id: "settings",
      title: "Settings",
      type: "item",
      url: "/dashboard/settings",
      icon: SettingsOutlinedIcon,
      description: "You can view your account details here",
    },
  ],
};

const support: MenuGroup = {
  id: "support",
  title: "SUPPORT",
  type: "group",
  children: [
    {
      id: "docs",
      title: "Docs",
      type: "item",
      url: "/dashboard/docs",
      icon: InsertDriveFileOutlinedIcon,
      description: "You can view your account details here",
    },
    {
      id: "tickets",
      title: "Tickets",
      type: "item",
      url: "/dashboard/tickets",
      icon: ConfirmationNumberOutlinedIcon,
      description: "You can view your account details here",
    },
  ],
};

const admin: MenuGroup = {
  id: "admin",
  title: "ADMIN",
  type: "group",
  children: [
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

type Menu = MenuGroup[];

export const menu: Menu = [dashboard, modules, account, support, admin];
