"use client";

import { useActionState } from "react";
import { loginUser } from "@/lib/auth/actions/login";
import styles from "@/styles/form.module.css";
import Input from "@/components/input/Input";
import ButtonSubmit from "@/components/button-submit/ButtonSubmit";

export default function SingInPage() {
	const [formState, formAction, isPending] = useActionState(loginUser, {
		error: "",
	});
	return (
		<div className={styles.container}>
			<form className={styles.form} action={formAction} noValidate>
				<Input name="email" type="text" autocomplete="email" />
				<Input name="password" type="password" autocomplete="new-password" />
				<ButtonSubmit isLoading={isPending}>Sing in</ButtonSubmit>
				<p className={`${formState?.error ? styles.error : styles.none}`}>
					{formState?.error || ""}
				</p>
			</form>
		</div>
	);
}
