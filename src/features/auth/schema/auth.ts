import { z } from "zod";
import { responseSchema } from "@/schemas/json-response";
import {
  basePermissionSchema,
  baseProfileSchema,
  baseRoleSchema,
  baseUserSchema,
} from "@/schemas/base";
import { RoleSchema } from "@/features/role/schema/role";

export const roleEnum = z.enum(["super-admin", "admin", "manager", "user"]);

export type TRoleSchema = z.infer<typeof roleEnum>;

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required."),
});

export type AuthResponse = z.infer<typeof authResponseSchema>;
export const authResponseSchema = responseSchema.extend({
  data: baseUserSchema
    .extend({
      roles: z.array(
        baseRoleSchema.extend({ permissions: z.array(basePermissionSchema) })
      ),
      permissions: z.array(basePermissionSchema),
      profile: baseProfileSchema,
    })
    .nullable()
    .optional(),
});

export type TRolesPaginatedResponseSchema = z.infer<
  typeof rolesPaginatedResponseSchema
>;
export const rolesPaginatedResponseSchema = responseSchema.extend({
  data: z.array(RoleSchema),
});
