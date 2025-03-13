import { z } from "zod";
import { responseSchema } from "@/schemas/json-response";

export type TCreateMaintenanceSchema = z.infer<typeof CreateMaintenanceSchema>;
export const CreateMaintenanceSchema = z.object({
  property: z.string().optional().nullable(),
  space: z.string().optional().nullable(),
  priority: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
});

export type TMaintenance = z.infer<typeof MaintenanceSchema>;
export const MaintenanceSchema = z.object({
  property: z.string().optional().nullable(),
  space: z.string().optional().nullable(),
  priority: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  action: z.string().optional().nullable(),
});

export type TMaintenanceResponseSchema = z.infer<
  typeof MaintenanceResponseSchema
>;
export const MaintenanceResponseSchema = responseSchema.extend({
  data: MaintenanceSchema,
});
