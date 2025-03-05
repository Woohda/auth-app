export interface ButtonProps {
	type: "submit" | "reset" | "button";
	className?: string;
	оnClick?: () => void;
	children?: React.ReactNode;
}
export default function Button({
	type,
	className,
	оnClick,
	children,
}: ButtonProps) {
	return (
		<button type={type} className={className} onClick={оnClick}>
			{children}
		</button>
	);
}
