"use client";

import { useActionState } from "react";
import { registerUser } from "../../lib/api/auth/registration";
import styles from "./registration.module.css";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";

export default function RegistrationPage() {
	const [formState, formAction] = useActionState(registerUser, {
		values: { name: "", surname: "", email: "" },
		errors: {},
		error: "",
	});
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Сreate an account:</h2>
			<form className={styles.form} action={formAction} noValidate>
				<Input
					name="name"
					type="text"
					defaultValue={formState.values?.name || ""}
					error={formState.errors?.name || ""}
				/>
				<Input
					name="surname"
					type="text"
					defaultValue={formState.values?.surname || ""}
					error={formState.errors?.surname || ""}
				/>
				<Input
					name="email"
					type="text"
					autocomplete="email"
					defaultValue={formState.values?.email || ""}
					error={formState.errors?.email || ""}
				/>
				<Input
					name="password"
					type="password"
					autocomplete="new-password"
					error={formState.errors?.password || ""}
				/>
				<Button type="submit" text="Sign Up" error={formState.error || ""} />
			</form>
		</div>
	);
}
