import * as z from 'zod';

export const LoginSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password:z.string()
});
