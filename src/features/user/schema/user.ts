
import {
  apiPaginatedResponseSchema,
  responseSchema,
} from "@/schemas/json-response";
import { z } from "zod";

/**
 * USER SCHEMA
 */
export type TUsersSchema = z.infer<typeof UserSchema>;
export const UserSchema = z.object({
  id: z.string().optional(),
  email: z.string().min(1, "Email is required"),
  password_confirmation: z
    .string()
    .min(8, "Password confirmation must be at least 8 characters")
    .optional(),
  password: z
    .string()
    .min(8, "Password confirmation must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    )
    .optional(),
  roles: z.array(z.string()).min(1, "Please select at least one role"),
  created_at: z.string().optional(),
  deleted_at: z.string().nullable().optional(),
});

/**
 * PROFILE SCHEMA
 */
export type TProfileSchema = z.infer<typeof ProfileSchema>;
export const ProfileSchema = z.object({
  first_name: z
    .string()
    .min(1, "First name must be at least 1 character long")
    .regex(
      /^[a-zA-ZñÑáéíóúüÁÉÍÓÚÜ .]+$/,
      "First name can only contain letters, spaces, and periods."
    ),
  middle_name: z
    .string()
    .regex(
      /^[a-zA-ZñÑáéíóúüÁÉÍÓÚÜ .]+$/,
      "Middle name can only contain letters, spaces, and periods."
    )
    .optional()
    .nullable(),

  last_name: z
    .string()
    .min(1, "Last name must be at least 1 character long")
    .regex(
      /^[a-zA-ZñÑáéíóúüÁÉÍÓÚÜ .]+$/,
      "Last name can only contain letters, spaces, and periods."
    ),
  contact_num: z.string().min(1, "Contact number is required"),

  gender: z.string().optional().nullable(),
  deleted_at: z.string().nullable().optional(),
});

/**
 * TODO: TRANSFER TO FEATURE/AUTH
 * MERGED USER PROFILE SCHEMA
 */
export type TRoleSchema = z.infer<typeof RoleSchema>;
export const RoleSchema = z.object({
  id: z.string(),
  name: z.string(),
  created_at: z.string().nullable().optional(),
  updated_at: z.string().nullable().optional(),
  deleted_at: z.string().nullable().optional(),
});

/**
 * MERGED USER PROFILE SCHEMA
 */
const picked = UserSchema.pick({
  id: true,
  email: true,
});

export const userSchemaKeys = picked.keyof()._def.values;
export const profileSchemaKeys = ProfileSchema.keyof()._def.values;
export const roleSchemaKeys = RoleSchema.keyof()._def.values;

/**
 * CREATE USER PROFILE SCHEMA
 */
export type TCreateUserProfileSchema = z.infer<typeof CreateUserProfileSchema>;
export const CreateUserProfileSchema = UserSchema.merge(ProfileSchema).refine(
  data => data.password === data.password_confirmation,
  {
    message: "Password don't match",
    path: ["password_confirmation"],
  }
);

export type TUserProfileSchema = z.infer<typeof UserProfileSchema>;
export const UserProfileSchema = UserSchema.extend({
  profile: ProfileSchema,
  roles: z.array(RoleSchema),
});

export type TEditUserAccountSchema = z.infer<typeof EditUserAccountSchema>;
export const EditUserAccountSchema = UserProfileSchema.pick({
  email: true,
  roles: true,
}).extend({
  roles: z.array(z.string()),
});

export type TEditProfileSchema = z.infer<typeof EditProfileSchema>;
export const EditProfileSchema = ProfileSchema.pick({
  first_name: true,
  middle_name: true,
  last_name: true,
  gender: true,
  contact_num: true,
});

export type TEditUserPasswordSchema = z.infer<typeof EditUserPasswordSchema>;
export const EditUserPasswordSchema = UserProfileSchema.pick({
  password: true,
  password_confirmation: true,
})
  .extend({
    current_password: z.string().optional(),
  })
  .refine(
    data => {
      if (data.password || data.password_confirmation) {
        return data.password === data.password_confirmation;
      }
      return true;
    },
    {
      message: "Passwords don't match",
      path: ["password_confirmation"],
    }
  );

/**
 * SINGLE USER RESPONSE SCHEMA
 */
export type TSingleUserResponseSchema = z.infer<
  typeof SingleUsersResponseSchema
>;
export const SingleUsersResponseSchema = responseSchema.extend({
  data: UserProfileSchema,
});

/**
 * ALL USERS RESPONSE SCHEMA
 */
export type TUsersPaginatedResponseSchema = z.infer<
  typeof usersPaginatedResponseSchema
>;
export const usersPaginatedResponseSchema = responseSchema.extend({
  data: apiPaginatedResponseSchema.extend({ data: z.array(UserProfileSchema) }),
});
