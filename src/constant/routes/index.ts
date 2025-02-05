import {
  DepartmentPermission,
  ScheduleTypePermission,
  ProjectPermission,
  RolePermission,
  SchedulePermission,
  UserPermission,
} from "@/constant/permissions";
import { Action } from "@/constant/action";

const DASHBOARD_ROUTE_PREFIX = "/dashboard";

const routes = {
  Users: {
    index: `${DASHBOARD_ROUTE_PREFIX}/users`,
    [UserPermission[Action.ViewMany]]: `${DASHBOARD_ROUTE_PREFIX}/users`,
    [UserPermission[Action.Create]]: `${DASHBOARD_ROUTE_PREFIX}/users/create`,
    [UserPermission[Action.Update]]: `${DASHBOARD_ROUTE_PREFIX}/users/edit`,
  },
  RolesAndPermissions: {
    index: `${DASHBOARD_ROUTE_PREFIX}/roles-and-permissions`,
    [RolePermission[Action.ViewMany]]:
      `${DASHBOARD_ROUTE_PREFIX}/roles-and-permissions`,
    [RolePermission[Action.Create]]:
      `${DASHBOARD_ROUTE_PREFIX}/roles-and-permissions/create`,
    [RolePermission[Action.Update]]:
      `${DASHBOARD_ROUTE_PREFIX}/roles-and-permissions/edit`,
  },
  Projects: {
    index: `${DASHBOARD_ROUTE_PREFIX}/projects`,
    [ProjectPermission[Action.ViewMany]]: `${DASHBOARD_ROUTE_PREFIX}/projects`,
    [ProjectPermission[Action.Create]]:
      `${DASHBOARD_ROUTE_PREFIX}/projects/create`,
    [ProjectPermission[Action.Update]]:
      `${DASHBOARD_ROUTE_PREFIX}/projects/edit`,
  },
  Schedules: {
    index: `${DASHBOARD_ROUTE_PREFIX}/schedules`,
    [SchedulePermission[Action.ViewMany]]:
      `${DASHBOARD_ROUTE_PREFIX}/schedules`,
    [SchedulePermission[Action.Create]]:
      `${DASHBOARD_ROUTE_PREFIX}/schedules/create`,
    [SchedulePermission[Action.Update]]:
      `${DASHBOARD_ROUTE_PREFIX}/schedules/edit`,
  },
  Departments: {
    index: `${DASHBOARD_ROUTE_PREFIX}/departments`,
    [DepartmentPermission[Action.ViewMany]]:
      `${DASHBOARD_ROUTE_PREFIX}/departments`,
    [DepartmentPermission[Action.Create]]:
      `${DASHBOARD_ROUTE_PREFIX}/departments/create`,
    [DepartmentPermission[Action.Update]]:
      `${DASHBOARD_ROUTE_PREFIX}/departments/edit`,
  },
  TScheduleTypesSchema: {
    index: `${DASHBOARD_ROUTE_PREFIX}/schedule-types`,
    [ScheduleTypePermission[Action.ViewMany]]:
      `${DASHBOARD_ROUTE_PREFIX}/schedule-types`,
    [ScheduleTypePermission[Action.Create]]:
      `${DASHBOARD_ROUTE_PREFIX}/schedule-types/create`,
    [ScheduleTypePermission[Action.Update]]:
      `${DASHBOARD_ROUTE_PREFIX}/schedule-types/edit`,
  },
};

export const userRoutes = routes.Users;
export const rolesAndPermissionRoutes = routes.RolesAndPermissions;
export const projectRoutes = routes.Projects;
export const scheduleRoutes = routes.Schedules;
export const departmentRoutes = routes.Departments;
export const scheduleTypeRoutes = routes.TScheduleTypesSchema;
