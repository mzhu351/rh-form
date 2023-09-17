import { IStepperProps } from "./types";
import { util } from "./hooks";

export const Stepper = ({ steps, questionId }: IStepperProps) => {
	const activeStep = util.getStepByQuestionId(steps, questionId);
	const stepIndex = steps.findIndex((step) => step.id === activeStep.id);

	return (
		<div
			id="status-display"
			style={{ position: "absolute", top: "1rem", right: "1rem" }}
		>
			{stepIndex + 1} / {steps.length}
			<span style={{ marginLeft: "10px", fontStyle: "italic" }}>
				{activeStep.label}
			</span>
		</div>
	);
};
