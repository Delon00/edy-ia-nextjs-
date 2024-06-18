/**
 * Un tableau de route qui sont accessibles en 'public'
 * @type {string[]}
 */
export const publicRoutes = [
    "/"
];

/**
 * La redirection par défaut après connexion
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";


/**
 * La redirection par défaut après L'inscription
 * @type {string}
 */
export const DEFAULT_REGISTER_REDIRECT = "/survey";



/**
 * Le préfixe API pour l'authentification
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";
