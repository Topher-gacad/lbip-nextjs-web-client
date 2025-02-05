import { z } from "zod";
import { responseSchema } from "@/schemas/json-response";
import {
  basePermissionSchema,
  baseProfileSchema,
  baseRoleSchema,
  baseUserSchema,
} from "@/schemas/base";

export const roleEnum = z.enum(["super-admin", "admin", "manager", "user"]);

export type TRoleSchema = z.infer<typeof roleEnum>;

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required."),
});

export const RegisterSchema = z.object({
  fname: z
    .string()
    .min(1, "First Name is required!")
    .regex(new RegExp(/^[a-zA-Z .]+$/), "Invalid input"),
  mname: z.string().optional(),
  lname: z
    .string()
    .min(1, "Last Name is required!")
    .regex(new RegExp(/^[a-zA-Z .]+$/), "Invalid input"),
  suffix: z.string().optional(),

  bdate: z.coerce.date(),
  age: z.coerce.number(),
  contactNumber: z
    .string()
    .regex(new RegExp(/^(09|\+639)\d{9}$/), "Invalid phone format"),
  occupation: z
    .string()
    .min(1, "Occupation is required!")
    .regex(new RegExp(/^[a-zA-Z .]+$/), "Invalid input"),
  department: z.string().min(1, "Department is required"),
  email: z.string().email("Email is required!"),
  password: z.string().min(1, "Password is required!"),
  confirmPassword: z.string().min(1, "Password is required!"),
  consent: z.boolean().refine(value => value === true, {
    message: "Consent required!",
  }),
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
