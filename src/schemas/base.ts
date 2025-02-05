import { z } from "zod";

export type TBaseRole = z.infer<typeof baseRoleSchema>;
export const baseRoleSchema = z.object({
  id: z.string(),
  name: z.string(),
  created_at: z.string().nullable().optional(),
  updated_at: z.string().nullable().optional(),
  deleted_at: z.string().nullable().optional(),
});

export type TBasePermission = z.infer<typeof basePermissionSchema>;
export const basePermissionSchema = z.object({
  id: z.string(),
  name: z.string(),
  guard_name: z.string().nullable().optional(),
  category: z.string(),
  created_at: z.string().nullable().optional(),
  updated_at: z.string().nullable().optional(),
  deleted_at: z.string().nullable().optional(),
});

export type BaseProfile = z.infer<typeof baseProfileSchema>;
export const baseProfileSchema = z.object({
  id: z.string(),
  employee_id: z.string().nullable().optional(),
  first_name: z.string(),
  middle_name: z.string().nullable().optional(),
  last_name: z.string(),
  hourly_rate: z.number().nullable().optional(),
  gender: z.string().nullable().optional(),
  contact_num: z.string().nullable().optional(),
  user_id: z.string(),
  department_id: z.string(),
  job_title_id: z.string(),
  deleted_at: z.string().nullable().optional(),
  created_at: z.string().nullable().optional(),
  updated_at: z.string().nullable().optional(),
});

export type BaseUser = z.infer<typeof baseUserSchema>;
export const baseUserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  email_verified_at: z.string().nullable().optional(),
  password: z.string().nullable().optional(),
  password_changed_at: z.string().nullable().optional(),
  deleted_at: z.string().nullable().optional(),
  deleted_by: z.string().nullable().optional(),
  remember_token: z.string().nullable().optional(),
  updated_at: z.string().nullable().optional(),
  created_at: z.string().nullable().optional(),
  roles: z.array(baseRoleSchema).nullable().optional(),
  permissions: z.array(basePermissionSchema).nullable().optional(),
});
