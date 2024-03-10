/**
 * Un tableau de route qui sont accessibles en 'public'
 * @type {string[]}
 */
export const publicRoutes = [
    "/"
];

/**
 * Un tableau de route qui sont utilisées pour l'authentification
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register"
];

/**
 * La redirection par défaut après connexion
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";

/**
 * Le préfixe API pour l'authentification
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";
