import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z.string().min(1, "Email is required"),

  password: z.string().min(1, "Password is required"),
});

export const CreateProfileSchema = z.object({
  first_name: z
    .string()
    .min(1, "First name must be at least 1 character long")
    .regex(
      /^[a-zA-Z .]+$/,
      "First name can only contain letters, spaces, and periods"
    ),

  middle_name: z
    .string()
    .regex(
      /^[a-zA-Z .]+$/,
      "Middle name can only contain letters, spaces, and periods"
    )
    .optional()
    .nullable(),

  last_name: z
    .string()
    .min(1, "Last name must be at least 1 character long")
    .regex(
      /^[a-zA-Z .]+$/,
      "Last name can only contain letters, spaces, and periods"
    ),

  contact_num: z.string().min(1, "Contact number is required"),

  gender: z.string().optional().nullable(),
});

export const CreateUserProfileSchema =
  CreateUserSchema.merge(CreateProfileSchema);
