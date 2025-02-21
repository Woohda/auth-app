import { auth, signOut } from "@/app/api/auth/auth";
import Button from "@/components/button/Button";

export default async function Profile() {
	const session = await auth();
	console.log(session?.user);
	return (
		<div>
			<h1>Profile:</h1>
			<ul>
				<li>Name:{session?.user?.name}</li>
				<li>Surname:</li>
				<li>Email:{session?.user?.email}</li>
			</ul>
			<form
				action={async () => {
					"use server";
					await signOut();
				}}
			>
				<Button type="submit" text="Sing out" />
			</form>
		</div>
	);
}
