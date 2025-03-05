export interface ButtonProps {
	type: "submit" | "reset" | "button";
	className?: string;
	оnClick?: () => void;
	children?: React.ReactNode;
}
export default function Button({ type, className, children }: ButtonProps) {
	return (
		<button type={type} className={className}>
			{children}
		</button>
	);
}
