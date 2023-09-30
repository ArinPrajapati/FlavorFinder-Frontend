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

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email")
    .min(1, "Please add the restaurant email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const createUSer = z.object({
  user_name: z.string().min(4, "User name must be at least 4 characters "),
  user_email: z
    .string()
    .email("Add Vaild Email")
    .min(1, "Please add Your Email"),
  user_password: z.string().min(6, "Password must be at least 6 characters"),
});

export const userLogin = z.object({
  email: z.string().email("Add a Valid Email").min(1, "please add your Email"),
  password: z.string().min(1, "Add the passowrd"),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
export type CreateUSer = z.infer<typeof createUSer>;
export type UserLogin = z.infer<typeof userLogin>;
