import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";



export default {
    providers: [
        Credentials({
            async authorize(credentials){
                const validationResult = LoginSchema.safeParse(credentials);
                if(validationResult.success){
                    const {email,password} = validationResult.data;
                    const user = await getUserByEmail(email);
                    // const user = await prismadb.user.findUnique({ where: { email } });
                    console.log(user)
                    if(!user||!user.password)
                        return null ;
                    const passwordMatch = await bcrypt.compare(password,user.password);
                    if(passwordMatch) 
                        console.log(passwordMatch)
                        return user;
                }
                return null;
            }
        })
    ],
} satisfies NextAuthConfig