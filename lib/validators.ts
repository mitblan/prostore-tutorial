import { z } from 'zod'
import { formatNumberWithDecimal } from './utils'

const currency = z
.string()
.refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))), 'Price must have exactly two decimal places')

// Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(3, 'Name must be at least three characters.'),
  slug: z.string().min(3, 'Slug must be at least three characters.'),
  category: z.string().min(3, 'Category must be at least three characters.'), 
  brand: z.string().min(3, 'Brand must be at least three characters.'), 
  description: z.string().min(3, 'Categoy must be at least three characters.'), 
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, 'Product must have at least one image.'),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
})

// Schema for signing user in
export const signInFormSchema = z.object({
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.')
})

// Schema for signing user up
export const signUpFormSchema = z.object({
  name: z.string().min(3, 'Name must be at least three characters'),
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
  confirmPassword: z.string().min(6, 'Confirm password must be at least 6 characters.')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match.",
  path: ['confirmPassword'],
})