import * as z from 'zod';

export const LoginSchema = z.object({
    username: z.string().min(3),
    email: z.string().email({message:"email ou id invalide"}),
    password:z.string().min(1,{message:"Le mot de passe est requis"})
});
