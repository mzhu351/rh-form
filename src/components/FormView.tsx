import { IFormViewProps, IQuestion } from "./types";

import { RadioGroupField, TextField } from "./Fields";

const getField = (question: IQuestion) => {
	switch (question.type) {
		case "radioGroup":
			return (
				<RadioGroupField
					name={question.name}
					label={question.label}
					options={question.options!}
				/>
			);
		case "text":
		case "number":
			return (
				<TextField
					name={question.name}
					label={question.label}
					type={question.type}
				/>
			);
		default:
			return null;
	}
};

export const FormView = ({ question }: IFormViewProps) => {
	return (
		<div>
			<h3
				style={{
					textAlign: "center",
					margin: 0,
					marginBottom: "2rem",
					marginTop: "50px",
				}}
			>
				{question.title}
			</h3>
			<div
				style={{
					paddingBottom: "20px",
					minWidth: "400px",
				}}
			>
				{getField(question)}
			</div>
		</div>
	);
};
