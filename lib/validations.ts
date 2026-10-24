import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(9, "Please enter a valid phone number")
    .max(20)
    .regex(/^[\+\d\s\-\(\)]+$/, "Please enter a valid phone number"),
  company: z.string().max(100).optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000),
});

export const quoteSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(9).max(20),
  company: z.string().min(2).max(200),
  projectType: z.string().min(2).max(100),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  location: z.string().min(2).max(200),
  timeline: z.string().min(2).max(100),
  budget: z.string().max(100).optional(),
  description: z.string().min(20).max(3000),
});

export const careerSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(9).max(20),
  position: z.string().min(2).max(200),
  experience: z.string().min(2).max(100),
  education: z.string().min(2).max(200),
  coverLetter: z.string().min(50).max(3000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type QuoteFormValues = z.infer<typeof quoteSchema>;
export type CareerFormValues = z.infer<typeof careerSchema>;
