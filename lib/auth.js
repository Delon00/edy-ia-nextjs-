import  PrismaClient  from '@prisma/client';
import  PrismaAdapter  from '@next-auth/prisma-adapter';
import NextAuth  from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    session: { strategy: 'jwt' },
    providers: [
    GoogleProvider({clientId: process.env.GOOGLE_CLIENT_ID,clientSecret: process.env.GOOGLE_CLIENT_SECRET}),
    EmailProvider({
        server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {user: process.env.EMAIL_SERVER_USER,pass: process.env.EMAIL_SERVER_PASSWORD}
        },from: process.env.EMAIL_FROM,
        sendVerificationRequest: async ({ identifier: email, url, provider: { server, from } }) => {
        // Votre fonction d'envoi de vérification ici
        console.log(email, url, server, from);
        }
    })
    ]
}
export default NextAuth(authOptions)
