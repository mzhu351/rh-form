import { Link } from "react-router-dom";

import { util, STEPS_MAP, QUESTIONS_MAP as questionMap } from "../shared";

import { Question } from "./Question";

export const FormContainer = () => {
	const steps = STEPS_MAP["test1"];
	const questions = util.getCongiuredQuestions(steps, questionMap);

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
			<ul>
				{questions.map((q, index) => (
					<li key={q.id}>
						<Link to={`/form/${q.id}`}>
							<Question />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
