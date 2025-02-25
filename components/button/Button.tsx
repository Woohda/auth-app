import styles from "./Button.module.css";
export interface ButtonProps {
	type: "submit" | "reset" | "button";
	оnClick?: () => void;
	children?: React.ReactNode;
}
export default function Button({ type, children }: ButtonProps) {
	return (
		<button type={type} className={styles.button}>
			{children}
		</button>
	);
}
