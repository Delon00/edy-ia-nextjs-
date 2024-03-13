'use server'
import { RegisterSchema } from "@/schemas";
import  {prismadb}  from "@/lib/prismadb";
import bcrypt from 'bcryptjs';
import { getUserByEmail } from "@/data/user";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const RegisterAction = async (values) => {
    console.log("Données du formulaire :", values);
    const validationResult = RegisterSchema.safeParse(values);

    if (!validationResult.success) {
        return { error: "Champs invalides", details: validationResult.error };
    }

    const { email, password } = validationResult.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await getUserByEmail(email);
    
    if (existingUser) {
        return { error: "Adresse e-mail déjà utilisée" };
    }

    await prismadb.user.create({
        data: {
            email,
            password: hashedPassword,
        },
    });
    await signIn('credentials', {
        email: values.email,
        password: values.password
    });
};

