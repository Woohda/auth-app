"use server";

import bcrypt from "bcryptjs";
// import { redirect } from "next/navigation";
import registerSchema from "@/lib/schemas/RegisterSchema";
import { db } from "@/lib/prisma/db";

// Валидация email и пароля

export async function registrationUser(prevState: unknown, formData: FormData) {
	const { name, surname, email, password } = Object.fromEntries(
		formData
	) as Record<string, string>;

	const validatedFields = registerSchema.safeParse({
		name,
		surname,
		email,
		password,
	});
	if (!validatedFields.success) {
		const errors: Record<string, string> = {};
		validatedFields.error.errors.forEach((err) => {
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

	const result = await db.user.create({
		data: {
			name,
			surname,
			email,
			password: hashedPassword,
		},
	});

	if (result) {
		return {
			success: "You have successfully registered.",
		};
	}
	// TODO: Сделать верефикацию по email

	// redirect("/login");
}
