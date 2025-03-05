import Link from "next/link";
import styles from "./Nav.module.css";
import { auth, signOut } from "@/app/api/auth/auth";

export default async function Nav() {
	const session = await auth();
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link className={styles.logo} href="/">
						Home
					</Link>
				</li>
				{session && (
					<li>
						<Link className={styles.logo} href="/profile">
							Profile
						</Link>
					</li>
				)}
			</ul>
			{session ? (
				<button
					onClick={async () => {
						"use server";
						await signOut();
					}}
				>
					Sign Out
				</button>
			) : (
				<ul>
					<li>
						<Link href="/sign-in">Sign In</Link>
					</li>
					<li>
						<Link href="/sign-up">Sign Up</Link>
					</li>
				</ul>
			)}
		</nav>
	);
}
