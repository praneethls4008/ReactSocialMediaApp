import { z } from "zod"
export const signupformSchema = z.object({
    name: z.string().min(4).max(20),
    username: z.string().min(5).max(15),
    email: z.string().email(),
    password: z.string().min(8)
})

export const signinformSchema = z.object({
    username: z.string().min(5).max(15),
    password: z.string().min(8)
})