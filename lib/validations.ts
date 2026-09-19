import { z } from "zod";

export const step1Schema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  website: z.string().min(3, "Please provide a valid website or domain"),
  industry: z.string().min(1, "Please select your primary industry"),
});

export const step2Schema = z.object({
  callVolume: z.enum(["< 200", "200 - 1,000", "1,000 - 5,000", "5,000+"], {
    errorMap: () => ({ message: "Please select your estimated monthly call volume" }),
  }),
  channels: z
    .array(z.string())
    .min(1, "Select at least one channel for deployment"),
});

export const step3Schema = z.object({
  crm: z.string().min(1, "Please select your primary CRM or schedule platform"),
  primaryGoal: z.string().min(1, "Please choose your primary operational objective"),
});

export const step4Schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  workEmail: z.string().email("Please enter a valid work email address"),
  phone: z.string().min(7, "Please enter a valid telephone number"),
  notes: z.string().optional(),
});

export const fullQuoteSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema);

export type QuoteFormData = z.infer<typeof fullQuoteSchema>;
