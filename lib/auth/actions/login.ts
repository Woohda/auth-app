"use server";

import { DEFAULT_LOGIN_REDIRECT } from "@/app/api/auth/routes";
import { AuthError } from "next-auth";
import { signIn } from "@/api/auth/auth";

export async function loginUser(prevState: unknown, formData: FormData) {
	const { email, password } = Object.fromEntries(formData) as Record<
		string,
		string
	>;

	// Проверка на существование пользователя
	try {
		await signIn("credentials", {
			email,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		});
		return { success: "You have successfully logged in." };
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { error: "Invalid credentials." };
				default:
					return { error: "Server error." };
			}
		}
		throw error;
	}

	// TODO: Сделать двуфакторную аутентификацию
}
