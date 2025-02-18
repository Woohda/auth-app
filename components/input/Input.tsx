import styles from "./Input.module.css";

interface InputProps {
	name: string;
	type: string;
	defaultValue?: string;
	autocomplete?: string;
	error: string;
}
export default function Input({
	name,
	type,
	defaultValue,
	autocomplete,
	error,
}: InputProps) {
	return (
		<div className={styles.inputGroup}>
			<input
				className={styles.input}
				name={name}
				type={type}
				defaultValue={defaultValue}
				autoComplete={autocomplete}
				required
			/>
			<label className={styles.label}>{name}</label>
			<span className={styles.underline}></span>
			<p className={styles.error}>{error}</p>
		</div>
	);
}
