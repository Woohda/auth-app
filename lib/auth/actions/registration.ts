"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import RegisterSchema from "@/lib/schemas/RegisterSchema";
import { db } from "@/lib/prisma/db";

// Валидация email и пароля

export async function registerUser(prevState: unknown, formData: FormData) {
	const { name, surname, email, password } = Object.fromEntries(
		formData
	) as Record<string, string>;

	const validation = RegisterSchema.safeParse({
		name,
		surname,
		email,
		password,
	});
	if (!validation.success) {
		const errors: Record<string, string> = {};
		validation.error.errors.forEach((err) => {
			if (err.path[0]) {
				errors[err.path[0]] = err.message;
			}
		});
		return {
			error: "Please correct the errors in the form.",
			errors,
			values: { name, surname, email },
		};
	}

	// Хеширование пароля
	const hashedPassword = await bcrypt.hash(password, 10);

	// Проверка на существование пользователя
	const user = await db.user.findUnique({ where: { email } });
	if (user) {
		return {
			error: "Email is already in use.",
			values: { name, surname, email },
		};
	}

	await db.user.create({
		data: {
			name,
			surname,
			email,
			password: hashedPassword,
		},
	});
	// TODO: Сделать верефикацию по email

	redirect("/login");
}
