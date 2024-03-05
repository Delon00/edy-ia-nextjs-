const NextAuth = require("next-auth");
const GithubProvider = require("next-auth/providers/github");
const Google = require("next-auth/providers/google");
const { PrismaClient } = require("@prisma/client");
const { PrismaAdapter } = require("@auth/prisma-adapter");

const prisma = new PrismaClient();

const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
  ],
});

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

  ],
};

module.exports = { handlers, auth, signIn, signOut, authOptions };
