import { responseSchema } from "@/schemas/json-response";
import { z } from "zod";

export type TRoleSchema = z.infer<typeof RoleSchema>;

export const RoleSchema = z.object({
  name: z.string().min(1, "Invalid Role Name"),
  id: z.string().optional(),
  isDeleted: z.boolean().optional(),
});

export type TRoleResponseSchema = z.infer<typeof RoleResponseSchema>;
export const RoleResponseSchema = responseSchema.extend({
  data: z.array(RoleSchema),
});
