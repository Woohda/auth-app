import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { db } from "@/lib/prisma/db";
import authConig from "@/app/api/auth/auth.conig";

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(db),
	session: {
		strategy: "jwt",
	},
	...authConig,
});
