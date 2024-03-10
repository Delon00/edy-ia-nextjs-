import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({message:"email invalide"}),
    password:z.string().min(1,{message:"Le mot de passe est requis"})
});

export const RegisterSchema = z.object({
    email: z.string().email({ message: "email invalide" }),
    password: z.string().min(8, { message: "Au moins 8 caractères" }),
    password_repeat: z.string()
}).refine(data => data.password === data.password_repeat, {
    message: "Les mots de passe ne correspondent pas",
    path: ['password_repeat']
});
