import { z } from "zod";
import { responseSchema } from "@/schemas/json-response";

export type TCreatePropertySchema = z.infer<typeof CreatePropertySchema>;
export const CreatePropertySchema = z.object({
  property: z.string().optional().nullable(),
  space: z.string().optional().nullable(),
  ticket: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
});

export type TProperty = z.infer<typeof PropertySchema>;
export const PropertySchema = z.object({
  property: z.string().optional().nullable(),
  space: z.string().optional().nullable(),
  ticket: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  action: z.string().optional().nullable(),
});

export type TPropertyResponseSchema = z.infer<typeof PropertyResponseSchema>;
export const PropertyResponseSchema = responseSchema.extend({
  data: PropertySchema,
});
