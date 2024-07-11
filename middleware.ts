import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { DEFAULT_LOGIN_REDIRECT, publicRoutes, apiAuthPrefix, authRoutes } from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const pathname = nextUrl.pathname;

    const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(pathname);
    const isAuthRoute = authRoutes.includes(pathname);

    console.log("Pathname:", pathname);
    console.log("isLoggedIn:", isLoggedIn);
    console.log("isApiAuthRoute:", isApiAuthRoute);
    console.log("isPublicRoute:", isPublicRoute);
    console.log("isAuthRoute:", isAuthRoute);

    if (isApiAuthRoute) {return;}

    if (isAuthRoute) {
        if (isLoggedIn) {
            if (pathname !== DEFAULT_LOGIN_REDIRECT) {
                console.log("Redirecting to DEFAULT_LOGIN_REDIRECT");
                return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
            } else {return;}
        } else {
            console.log("Redirecting to /");
            return Response.redirect(new URL("/", nextUrl));
        }
    }

    if (isPublicRoute) {
        return;
    }

    if (!isLoggedIn) {
        console.log("Redirecting to / because user is not logged in");
        return Response.redirect(new URL("/", nextUrl));
    }

    console.log("Proceeding without redirection");
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
