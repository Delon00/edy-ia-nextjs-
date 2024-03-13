'use server';

import { signOut } from "@/auth"; 
import { AuthError } from "next-auth";
export const LogoutAction = async () => {
    try {
        await signOut();
    } catch (error) {
        if (error instanceof AuthError) {
            console.error("Erreur d'authentification lors de la déconnexion :", error); 
        } else {
            console.error("Erreur lors de la déconnexion :", error); 
        }
    }
}
