import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} href="/">Home</Link>
      <ul>
        <li>
          <Link href="/login">Sing In</Link>
        </li>
        <li>
          <Link href="/registration">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}
