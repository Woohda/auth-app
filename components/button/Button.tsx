import styles from "./Button.module.css";
export interface ButtonProps {
	type: "submit" | "reset" | "button";
	text: string;
	error: string;
}
export default function Button({ type, text, error }: ButtonProps) {
	return (
		<div className={styles.buttonGroup}>
			<button type={type} className={styles.button}>
				<a href="#" className={styles.styleButton}>
					<span className={styles.styleText}>{text}</span>
				</a>
			</button>
			<p className={styles.error}>{error}</p>
		</div>
	);
}
