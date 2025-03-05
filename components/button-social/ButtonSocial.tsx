import Button from "../button/Button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import styles from "./ButtonSocial.module.css";

export default function ButtonSocial() {
	return (
		<div className={styles.button_group}>
			<p className={styles.text}>or</p>
			<Button type="button" className={styles.button}>
				<FcGoogle className={styles.button_icon} />
			</Button>
			<Button type="button" className={styles.button}>
				<FaGithub className={styles.button_icon} />
			</Button>
		</div>
	);
}
