import { RegisterSchema } from "@/schemas";

export const RegisterAction = (values) => {
    console.log("Données du formulaire :", values);
    const validationResult = RegisterSchema.safeParse(values);

    if (!validationResult.success) {
        return { error: "Champs invalides", details: validationResult.error };
        // Ajout des détails de l'erreur pour faciliter le débogage
    }

    // Logique supplémentaire si nécessaire (par exemple, envoi d'un email)

    return { success: "Email envoyé" };
};

