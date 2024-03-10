'use server'
import { RegisterSchema } from "@/schemas";
import  prisma  from "@/lib/prisma";
import bcrypt from 'bcryptjs';
import { getUserByEmail } from "@/data/user";

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

    await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
        },
    });

    return { success: "Compte créé" };
};

