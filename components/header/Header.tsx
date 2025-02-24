import Nav from "@/components/nav/Nav";
import styles from "./Header.module.css";

export default async function Header() {
	return (
		<header className={styles.header}>
			<Nav />
		</header>
	);
}
