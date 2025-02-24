import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "@/styles/globals.css";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Loading from "@/components/loading/Loading";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${styles.page}`}
			>
				<Header />
				<main className={styles.main}>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</main>
			</body>
		</html>
	);
}
