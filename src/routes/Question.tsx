import { useParams } from "react-router-dom";

import { MultiStepForm } from "../components";

export const Question = () => {
	const { id } = useParams();
	return <MultiStepForm questionId={id} />;
};
