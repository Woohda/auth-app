"use client";

import { useActionState } from "react";
import { registrationUser } from "@/lib/auth/actions/registration";
import styles from "@/styles/form.module.css";
import Input from "@/components/input/Input";
import ButtonSubmit from "@/components/button-submit/ButtonSubmit";

export default function SignUpPage() {
	const [formState, formAction, isPending] = useActionState(registrationUser, {
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
					defaultValue={formState?.values?.name || ""}
					error={formState?.errors?.name || ""}
				/>
				<Input
					name="surname"
					type="text"
					defaultValue={formState?.values?.surname || ""}
					error={formState?.errors?.surname || ""}
				/>
				<Input
					name="email"
					type="text"
					autocomplete="email"
					defaultValue={formState?.values?.email || ""}
					error={formState?.errors?.email || ""}
				/>
				<Input
					name="password"
					type="password"
					autocomplete="new-password"
					error={formState?.errors?.password || ""}
				/>
				<ButtonSubmit isLoading={isPending}>Sign up</ButtonSubmit>
				<p className={`${formState?.error ? styles.error : styles.none}`}>
					{formState?.error || ""}
				</p>
			</form>
		</div>
	);
}
