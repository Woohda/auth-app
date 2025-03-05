import { db } from "@/lib/prisma/db";
import loginSchema from "@/lib/schemas/LoginSchema";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default {
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		GitHub({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
		Credentials({
			name: "authUser",
			async authorize(credentials) {
				const validatedFields = loginSchema.safeParse(credentials);
				if (validatedFields.success) {
					const { email, password } = validatedFields.data;

					const user = await db.user.findUnique({ where: { email } });
					if (!user || !user.password) {
						return null;
					}

					const passwordMatch = await bcrypt.compare(password, user.password);
					if (passwordMatch) {
						return user;
					}
				}
				return null;
			},
		}),
	],
} as NextAuthConfig;
