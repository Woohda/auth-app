"use client";

import { useActionState } from "react";
import { loginUser } from "@/lib/auth/actions/login";
import styles from "@/styles/form.module.css";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";

export default function SingInPage() {
	const [formState, formAction] = useActionState(loginUser, {
		error: "",
	});
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Сreate an account:</h2>
			<form className={styles.form} action={formAction} noValidate>
				<Input name="email" type="text" autocomplete="email" />
				<Input name="password" type="password" autocomplete="new-password" />
				<Button type="submit" text="Sign Up" />
				<p className={styles.error}>{formState?.error || ""}</p>
			</form>
		</div>
	);
}
