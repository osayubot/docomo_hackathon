import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/Prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        let user = null; // `try`ブロックの外で`user`を宣言
        try {
          // メールアドレス存在チェック
          user = await prisma.user.findUnique({
            where: { email: credentials?.email },
          });
        } catch (error) {
          return null; // エラーが発生した場合はnullを返す
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/signIn",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "/";
    },
  },
});

export { handler as GET, handler as POST };
