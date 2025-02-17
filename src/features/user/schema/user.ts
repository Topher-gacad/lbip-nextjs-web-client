import { responseSchema } from "@/schemas/json-response";
import { z } from "zod";

export type TUserSchema = z.infer<typeof UserSchema>;
export const UserSchema = z.object({
  id: z.string().optional(),

  email: z.string().min(1, "Email is required"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-Z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number letter")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    )
    .optional(),

  password_confirmation: z
    .string()
    .min(8, "Password confirmation must be at least 8 characters")
    .optional(),

  created_at: z.string().optional(),
});

export type TProfileSchema = z.infer<typeof ProfileSchema>;
export const ProfileSchema = z.object({
  first_name: z.string().min(1, "First name must be at least 1 character long"),

  middle_name: z.string().optional().nullable(),

  last_name: z.string().min(1, "Last name must be at least 1 character long"),

  contact_num: z.string().min(1, "Contact number is required"),

  gender: z.string().optional().nullable(),
});

export type TCreateUserProfileSchema = z.infer<typeof CreateUserProfileSchema>;
export const CreateUserProfileSchema = UserSchema.merge(ProfileSchema).refine(
  data => data.password === data.password_confirmation,
  {
    message: "Password don't match",
    path: ["password_confirmation"],
  }
);

export type TUserProfileSchema = z.infer<typeof UserProfileSchema>;
export const UserProfileSchema = UserSchema.extend({ profile: ProfileSchema });

export type TUserResponseSchema = z.infer<typeof UserResponseSchema>;
export const UserResponseSchema = responseSchema.extend({
  data: z.object({
    data: z.array(UserProfileSchema),
    links: z.object({}),
    meta: z.object({}),
  }),
});
