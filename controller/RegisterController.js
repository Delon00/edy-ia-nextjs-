'use server'
import { RegisterSchema } from "@/schemas";
import  prisma  from "@/lib/prisma";
import bcrypt from 'bcrypt';

export const RegisterAction = async (values) => {
    console.log("Données du formulaire :", values);
    const validationResult = RegisterSchema.safeParse(values);

    if (!validationResult.success) {
        return { error: "Champs invalides", details: validationResult.error };
    }

    const { email, password } = validationResult.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await prisma.User.findUnique({ where: { email } });
    
    if (existingUser) {
        return { error: "Cette adresse est déjà inscrite" };
    }

    await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
        },
    });

    return { success: "Compte créé" };
};

