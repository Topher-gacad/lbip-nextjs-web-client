export const DepartmentPermission = {
  ViewOne: "view one department",
  ViewMany: "view many department",
  ViewProtectedData: "view department protected data",
  Create: "create department",
  Update: "update department",
  SoftDelete: "soft delete department",
  HardDelete: "hard delete department",
} as const;

export const ScheduleTypePermission = {
  ViewOne: "view one schedule type",
  ViewMany: "view many schedule type",
  ViewProtectedData: "view schedule type protected data",
  Create: "create schedule type",
  Update: "update schedule type",
  SoftDelete: "soft delete schedule type",
  HardDelete: "hard delete schedule type",
} as const;

export const ProjectPermission = {
  ViewOwn: "view own project",
  ViewOne: "view one project",
  ViewMany: "view many project",
  ViewProtectedData: "view project protected data",
  Create: "create project",
  Update: "update project",
  SoftDelete: "soft delete project",
  HardDelete: "hard delete project",
  Restore: "restore project",
  Import: "import project",
  Export: "export project",
} as const;

export const RolePermission = {
  ViewOne: "view one role",
  ViewMany: "view many role",
  ViewProtectedData: "view role protected data",
  Create: "create role",
  Update: "update role",
  HardDelete: "hard delete role",
  Restore: "restore role",
} as const;

export const SchedulePermission = {
  ViewOwn: "view own schedule",
  ViewOne: "view one schedule",
  ViewMany: "view many schedule",
  ViewProtectedData: "view schedule protected data",
  Create: "create schedule",
  Update: "update schedule",
  SoftDelete: "soft delete schedule",
  HardDelete: "hard delete schedule",
  Restore: "restore schedule",
  Import: "import schedule",
  Export: "export schedule",
} as const;

export const UserPermission = {
  ViewAny: "view any user",
  ViewOne: "view one user",
  ViewMany: "view many user",
  ViewProtectedData: "view user protected data",
  Create: "create user",
  Update: "update user",
  SoftDelete: "soft delete user",
  HardDelete: "hard delete user",
  Restore: "restore user",
  Import: "import user",
  Export: "export user",
  ChangeOtherPassword: "change other user password",
} as const;

export const JobTitlePermission = {
  ViewOne: "view one job title",
  ViewMany: "view many job title",
  ViewProtectedData: "view job title protected data",
  Create: "create job title",
  Update: "update job title",
  SoftDelete: "soft delete job title",
  HardDelete: "hard delete job title",
} as const;

export const PermissionPermission = {
  ViewOne: "view one permission",
  ViewMany: "view many permission",
  ViewProtectedData: "view permission protected data",
} as const;
