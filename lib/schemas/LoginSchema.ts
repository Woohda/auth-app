import { z } from "zod";

const loginSchema = z.object({
	email: z.string().email("Invalid email format."),
	password: z
		.string()
		.min(8, "The password must contain at least 8 characters."),
	// .regex(/[A-Z]/, "The password must contain at least one uppercase letter")
	// .regex(/\d/, "The password must contain at least one digit")
	// .regex(
	// 	/[!@#$%^&*]/,
	// 	"The password must contain at least one special character (!@#$%^&*)"
	// ),
});

export default loginSchema;
