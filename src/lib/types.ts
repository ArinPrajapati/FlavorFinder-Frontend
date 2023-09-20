import { z } from "zod";

export const signUpSchema = z.object({
  restaurant_name: z.string().min(1, "Please add the restaurant Name"),
  restaurant_type: z.enum([
    "Other",
    "French cuisine",
    "Japanese Cuisine",
    "Italian Cuisine",
    "Greek Cuisine",
    "Spanish Cuisine",
    "Lebanese Cuisine",
    "Turkey Cuisine",
    "Thai Cuisine",
    "Indian Cuisine",
    "Mexican Cuisine",
    "American Cuisine",
  ]),
  restaurant_email: z
    .string()
    .email("Invalid email")
    .min(1, "Please add the restaurant email"),
  restaurant_desc: z.string().min(1, "Please add the restaurant Description"),
  restaurant_owner_name: z
    .string()
    .min(1, "Please add the restaurant owner name"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  restaurant_op_time: z.string().min(1, "Please add the opening time"),
  restaurant_cl_time: z.string().min(1, "Please add the closing time"),
  restaurant_location: z.string().min(1, "Please add the restaurant location"),
  restaurant_logo: z.string().optional().nullable(),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
