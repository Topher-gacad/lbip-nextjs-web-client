import { z } from "zod";
import { responseSchema } from "@/schemas/json-response";

export type TCreateBillingSchema = z.infer<typeof CreateBillingSchema>;
export const CreateBillingSchema = z.object({
  collected: z.string().optional().nullable(),
  pending: z.string().optional().nullable(),
  overdue: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
});

export type TBilling = z.infer<typeof BillingSchema>;
export const BillingSchema = z.object({
  collected: z.string().optional().nullable(),
  pending: z.string().optional().nullable(),
  overdue: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
});

export type TBillingResponseSchema = z.infer<typeof BillingResponseSchema>;
export const BillingResponseSchema = responseSchema.extend({
  data: BillingSchema,
});
