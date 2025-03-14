import { z } from "zod";
import { responseSchema } from "@/schemas/json-response";

// Define Billing Item Schema
const BillingItemSchema = z.object({
  amount: z.number().or(z.string()).transform(Number).optional().nullable(),
  properties: z.number().or(z.string()).transform(Number).optional().nullable(),
});

// Fix Billing Schema to correctly represent objects
export type TBilling = z.infer<typeof BillingSchema>;
export const BillingSchema = z.object({
  collected: BillingItemSchema.optional().nullable(),
  pending: BillingItemSchema.optional().nullable(),
  overdue: BillingItemSchema.optional().nullable(),
  status: z.string().optional().nullable(),
});

// Ensure Billing Response Schema is correctly structured
export type TBillingResponseSchema = z.infer<typeof BillingResponseSchema>;
export const BillingResponseSchema = responseSchema.extend({
  data: BillingSchema,
});

