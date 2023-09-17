import { IFormViewProps, IQuestion } from "./types";

import { RadioGroupField, TextField } from "./Fields";

const getInputField = (question: IQuestion) => {
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
			return <TextField name={question.name} label={question.label} />;
		default:
			return null;
	}
};

export const FormView = ({ question }: IFormViewProps) => {
	console.log("23::question::", question);
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
				{getInputField(question)}
			</div>
		</div>
	);
};
