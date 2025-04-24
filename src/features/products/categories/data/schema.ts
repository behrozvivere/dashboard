/*src/features/products/categories/data/schema.ts*/

import { z } from "zod";

// Define the allowed status values
export type CategoryStatus = "active" | "inactive" | "archived";

// Schema definition for category
export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable().optional(),
  parentId: z.string().nullable().optional(),
  status: z.enum(["active", "inactive", "archived"]),
  imageUrl: z.string().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  productCount: z.number().optional()
});

// Type for a single category
export type Category = z.infer<typeof categorySchema>;

// Validation schema for form submission
export const categoryFormSchema = categorySchema.omit({
  id: true,
  slug: true,
  createdAt: true,
  updatedAt: true,
  productCount: true
}).extend({
  name: z.string().min(2, {
    message: "Category name must be at least 2 characters."
  })
});

// Default values for the form
export const defaultCategory: Partial<Category> = {
  name: "",
  description: "",
  parentId: null,
  status: "active",
  imageUrl: null,
};
