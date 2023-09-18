import { useParams } from "react-router-dom";

import { MultiStepForm } from "../components";

export const Question = () => {
	const { id } = useParams();
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
			<MultiStepForm paramId={id} />
		</div>
	);
};
