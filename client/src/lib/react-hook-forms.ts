import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Please fill in all credentials" }).email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Please fill in all credentials" }).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Password must contain at least 8 characters including at least 1 capital letter , 1 lowercase letter , 1 symbol and 1 number')
});

export const registerSchema = z.object({
  email: z.string().min(1, { message: "Please fill in all credentials" }).email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Please fill in all credentials" }).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Password must contain at least 8 characters including at least 1 capital letter , 1 lowercase letter , 1 symbol and 1 number'),
  confirmpassword: z.string().min(1, { message: "Please fill in all credentials" }).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Password must contain at least 8 characters including at least 1 capital letter , 1 lowercase letter , 1 symbol and 1 number')
});




