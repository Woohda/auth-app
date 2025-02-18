import { z } from "zod";

const RegisterSchema = z.object({
	email: z.string().email("Invalid email format"),
	name: z.string().min(3, "The name must contain at least 3 characters"),
	surname: z.string().min(3, "The surname must contain at least 3 characters"),
	password: z
		.string()
		.min(8, "The password must contain at least 8 characters"),
	// .regex(/[A-Z]/, "The password must contain at least one uppercase letter")
	// .regex(/\d/, "The password must contain at least one digit")
	// .regex(
	// 	/[!@#$%^&*]/,
	// 	"The password must contain at least one special character (!@#$%^&*)"
	// ),
});

export default RegisterSchema;
