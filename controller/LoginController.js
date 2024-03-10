'use server'
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
export const LoginAction = async (values) => {
    console.log("Données du formulaire :", values);
    const validationResult = RegisterSchema.safeParse(values);

    if (!validationResult.success) {
        return { error: "Champs invalides", details: validationResult.error };
    }

    const {email,password} =validatedField.data;
    try{
        await signIn("credentials",{
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    }catch(error){
        if (error instanceof AuthError){
            switch(error.type){
                case"CredentialsSignin":
                    return{error:"Credential invalide"}
                default:
                    return {error:"Une erreur est survenue"}
            }
        }
        throw error;
    }

};
