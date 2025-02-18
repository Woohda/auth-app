/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
// import bcrypt from "bcryptjs";
import { z } from "zod";
// import { IUser } from "../../../types/types";
import { redirect } from "next/navigation";

// Валидация email и пароля
const RegisterSchema = z.object({
	email: z.string().email("Некорректный формат email"),
	name: z.string().min(2, "Имя должно содержать минимум 3 символа"),
	surname: z.string().min(2, "Фамилия должна содержать минимум 3 символа"),
	password: z
		.string()
		.min(8, "Пароль должен содержать минимум 8 символов")
		.regex(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
		.regex(/\d/, "Пароль должен содержать хотя бы одну цифру")
		.regex(
			/[!@#$%^&*]/,
			"Пароль должен содержать хотя бы один специальный символ (!@#$%^&*)"
		),
});

export async function registerUser(prevState: any, formData: FormData) {
	const name = formData.get("name") as string;
	const surname = formData.get("surname") as string;
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

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
			error: "Пожалуйста, исправьте ошибки в форме.",
			errors,
			values: { name, surname, email },
		};
	}

	try {
		// Проверяем, есть ли уже такой пользователь
		// const { data: users }: { data: IUser[] } = await axios.get(
		//   `http://localhost:5000/users?email=${email}`
		// );
		// if (users.length > 0) {
		//   return {
		//     error: "Пользователь с таким email уже существует",
		//     values: { name, surname, email },
		//   };
		// }
		// Создаем нового пользователя
		// const hashedPassword = await bcrypt.hash(password, 10);
		// const newUser = {
		//   id: Date.now(),
		//   name,
		//   surname,
		//   email,
		//   password: hashedPassword,
		// };
		// await axios.post("http://localhost:5000/users", newUser);
		return { success: "Пользователь успешно зарегистрирован" };
	} catch {
		return { error: "Ошибка сервера. Попробуйте позже." };
	} finally {
		redirect("/login");
	}
}
