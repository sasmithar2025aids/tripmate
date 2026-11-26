import { z } from 'zod'

export const registerSchema = z.object({
    name: z.string().min(3, "Name must contain 3 characters"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Password must contain 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your password"),

})