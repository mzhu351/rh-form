import { ReactNode } from "react";

type FormWrapperProps = {
	title: string;
	children: ReactNode;
};

export const FormView = ({ title, children }: FormWrapperProps) => {
	return (
		<>
			<h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
				{title}
			</h2>
			<div
				style={{
					paddingBottom: "20px",
					minWidth: "400px",
				}}
			>
				{children}
			</div>
		</>
	);
};
