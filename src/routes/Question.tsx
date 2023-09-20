import { MultiStepForm } from "../components";

// can add other elements in form pages
export const Question = () => {
	return (
		<div
			style={{
				position: "relative",
				background: "white",
				border: "2px solid LightGray",
				padding: "2rem 1rem",
				margin: "1rem",
				borderRadius: ".5rem",
				maxWidth: "max-content",
			}}
		>
			<MultiStepForm />
		</div>
	);
};
