import styles from "./Button.module.css";
export interface ButtonProps {
	type: "submit" | "reset" | "button";
	text: string;
	onClick?: () => void;
}
export default function Button({ type, text }: ButtonProps) {
	return (
		<div className={styles.buttonGroup}>
			<button type={type} className={styles.button}>
				<a href="#" className={styles.styleButton}>
					<span className={styles.styleText}>{text}</span>
				</a>
			</button>
		</div>
	);
}
