import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "@/auth.config"
import {prismadb} from "@/lib/prismadb"

export const { handlers: { GET, POST },auth,signIn,signOut} 
  = NextAuth({
    callbacks:{
      async session({ session, user, token }) {
        return session
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        return token
      }
    },
    adapter: PrismaAdapter(prismadb),
    session: { strategy: "jwt" },
    ...authConfig,
})