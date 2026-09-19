import { z } from "zod";

export const demoFormSchema = z.object({
  companyName: z.string().min(2, "Please enter your company name"),
  website: z.string().min(3, "Please enter your website or domain"),
  industry: z.string().min(1, "Please select an industry"),
  callVolume: z.string().min(1, "Please select your estimated monthly call volume"),
  needs: z.array(z.string()).min(1, "Select at least one requirement"),
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid work email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  notes: z.string().optional(),
});

export type DemoFormData = z.infer<typeof demoFormSchema>;
