import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { inquirySchema } from "@/lib/inquiry";
import { company } from "@/lib/site";
import { routeTree } from "@/routeTree.gen";

const paths = [
  "/",
  "/about",
  "/divisions",
  "/divisions/spinning",
  "/divisions/weaving",
  "/divisions/processing",
  "/divisions/stitching",
  "/products",
  "/products/yarn",
  "/products/fabrics",
  "/products/home-textiles",
  "/products/garments",
  "/products/health-safety",
  "/sustainability",
  "/quality",
  "/contact",
];

describe("site routes", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  it.each(paths)("matches a page for %s", (p) => {
    expect(router.matchRoutes(p).at(-1)?.routeId).not.toBe(rootRouteId);
  });
});

describe("company facts", () => {
  it("uses the published contact details", () => {
    expect(company.email).toBe("info@magnaprocessing.com");
    expect(company.phonePrimary).toBe("+92 41 2424070");
    expect(company.established).toBe(1965);
  });
});

describe("inquiry form validation", () => {
  const valid = {
    fullName: "Jane Buyer",
    company: "Acme Retail",
    email: "jane@acme.com",
    phone: "",
    country: "Germany",
    category: "Home Textiles",
    message: "We need 5,000 percale sheet sets for spring.",
  };

  it("accepts a complete inquiry with optional phone left empty", () => {
    expect(inquirySchema.safeParse(valid).success).toBe(true);
  });

  it("rejects an invalid email", () => {
    expect(inquirySchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects a category that is not offered", () => {
    expect(inquirySchema.safeParse({ ...valid, category: "Steel" }).success).toBe(false);
  });

  it("rejects a message shorter than 20 characters", () => {
    expect(inquirySchema.safeParse({ ...valid, message: "Need sheets" }).success).toBe(false);
  });
});
