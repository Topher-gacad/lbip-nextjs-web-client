import { z } from "zod";
import { responseSchema } from "@/schemas/json-response";

export type TCreateRecentActivitiesSchema = z.infer<
  typeof CreateRecentActivitiesSchema
>;
export const CreateRecentActivitiesSchema = z.object({
  time: z.number().optional().nullable(),
  image: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  subtitle: z.string().optional().nullable(),
});

export type TRecentActivities = z.infer<typeof RecentActivitiesSchema>;
export const RecentActivitiesSchema = z.object({
  time: z.number().optional().nullable(),
  image: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  subtitle: z.string().optional().nullable(),
});

export type TRecentActivitiesResponseSchema = z.infer<
  typeof RecentActivitiesResponseSchema
>;
export const RecentActivitiesResponseSchema = responseSchema.extend({
  data: RecentActivitiesSchema,
});
