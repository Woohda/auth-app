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
		<div className={styles.button_group}>
			<Button type="submit">
				<a
					href="#"
					className={`${styles.button_group_style} ${
						isLoading ? styles.loading : ""
					}`}
				>
					<span className={styles.button_group_text}>{children}</span>
				</a>
			</Button>
		</div>
	);
}
