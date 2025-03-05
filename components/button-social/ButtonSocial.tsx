"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

import styles from "./ButtonSocial.module.css";
import { DEFAULT_LOGIN_REDIRECT } from "@/app/api/auth/routes";

export default function ButtonSocial() {
	const onClick = (provider: "google" | "github") => {
		signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
	};
	return (
		<div className={styles.button_group}>
			<p className={styles.text}>or</p>
			<button
				type="button"
				className={styles.button}
				onClick={() => onClick("google")}
			>
				<FcGoogle className={styles.button_icon} />
			</button>
			<button
				type="button"
				className={styles.button}
				onClick={() => onClick("github")}
			>
				<FaGithub className={styles.button_icon} />
			</button>
		</div>
	);
}
