import { auth } from "@/app/api/auth/auth";

export default async function Profile() {
	const session = await auth();
	return (
		<div>
			<h1>Profile:</h1>
			<ul>
				<li>Name:{session?.user?.name}</li>
				<li>Surname:</li>
				<li>Email:{session?.user?.email}</li>
			</ul>
		</div>
	);
}
