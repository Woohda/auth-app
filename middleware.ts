import NextAuth from "next-auth";
import authConfig from "./auth.conig";
import { authRoutes, publicRoutes, DEFAULT_LOGIN_REDIRECT } from "./routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;
	console.log("LOOOOG", isLoggedIn);

	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isProtectedRoute = authRoutes.includes(nextUrl.pathname);

	if (isProtectedRoute) {
		if (isLoggedIn) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
		}
		return undefined;
	}

	if (!isLoggedIn && !isPublicRoute) {
		return Response.redirect(new URL("/sing-in", nextUrl));
	}
	return undefined;
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
