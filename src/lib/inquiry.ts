import { z } from "zod";

import { company, productOrder, getProduct } from "./site";

export const inquiryCategories = [
  ...productOrder.map((s) => getProduct(s)!.name),
  "Multiple categories / other",
];

export const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100, "Name is too long."),
  company: z.string().trim().min(2, "Please enter your company name.").max(120, "Company name is too long."),
  email: z.string().trim().email("Please enter a valid business email.").max(160),
  phone: z
    .string()
    .trim()
    .max(24, "Phone number is too long.")
    .refine((v) => v === "" || /^\+?[0-9\s\-()]{7,24}$/.test(v), "Please enter a valid phone number."),
  country: z.string().trim().min(2, "Please enter your country.").max(80),
  category: z.string().refine((v) => inquiryCategories.includes(v), "Please choose a product category."),
  message: z
    .string()
    .trim()
    .min(20, "Please describe your requirement (at least 20 characters).")
    .max(2000, "Message must be under 2,000 characters."),
});

export type Inquiry = z.infer<typeof inquirySchema>;

/** Builds a mailto link to Magna's published inquiry address with the form contents. */
export function buildInquiryMailto(data: Inquiry) {
  const subject = `Quotation request — ${data.category} — ${data.company}`;
  const body = [
    `Name: ${data.fullName}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    `Country: ${data.country}`,
    `Product category: ${data.category}`,
    "",
    data.message,
  ]
    .filter((l) => l !== null)
    .join("\n");
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
