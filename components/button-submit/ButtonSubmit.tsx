import styles from "./ButtonSubmit.module.css";
import Button from "../button/Button";

interface ButtonSubmitProps {
	children: string;
	isLoading: boolean;
}

export default function ButtonSubmit({
	children,
	isLoading,
}: ButtonSubmitProps) {
	return (
		<div className={styles.button_container}>
			<Button
				type="submit"
				className={`${styles.button_style} ${isLoading ? styles.loading : ""}`}
			>
				<span className={styles.button_text}>{children}</span>
			</Button>
		</div>
	);
}
