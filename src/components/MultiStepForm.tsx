import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Formik, FormikProps } from "formik";

import { FormView } from "./FormView";
import { STEPS_MAP, QUESTIONS_MAP as questionMap } from "./constants";
import { useQuestions } from "./hooks";
import { Stepper } from "./Stepper";
import { getValidationSchema } from "./validation-schema";
import { IFormValues } from "./types";

export const MultiStepForm = () => {
	const steps = STEPS_MAP["test1"];

	const { activeQuestion, isFirst, isLast, goNext, goBack, reset } =
		useQuestions(steps, questionMap);

	const handleBack = async () => {
		goBack();
	};

	const handleReset = async () => {
		// reset form=> wipe out sessionStorage and go back
		reset();
	};

	const handleSubmit = async (
		formikProps: FormikProps<IFormValues>,
		shouldGoNext = false
	) => {
		const { values, isValid } = formikProps;
		if (shouldGoNext) {
			if (isValid) {
				goNext();
			}
		} else {
			// todo; get from SessionStorageFull value and display on alert
			alert(JSON.stringify(values));
		}
	};

	const initialValues = {
		[activeQuestion?.name]: "",
	};
	console.log("initialValues::", initialValues);
	const currentSchema = activeQuestion
		? getValidationSchema(activeQuestion)
		: null;

	return activeQuestion ? (
		<div>
			{/* Stepper */}
			<Stepper steps={steps} questionId={activeQuestion?.id} />

			{/* Form */}
			<Formik
				initialValues={initialValues}
				validationSchema={currentSchema}
				validateOnChange={false}
				onSubmit={() => {}}
			>
				{(props: FormikProps<IFormValues>) => {
					return (
						<form auto-complete="false">
							<FormView question={activeQuestion} />

							<Stack direction="horizontal" gap={3}>
								{!isFirst && (
									<Button variant="outline-primary" onClick={handleBack}>
										Back
									</Button>
								)}

								<Button
									variant="link"
									className="ms-auto"
									onClick={handleReset}
								>
									Reset
								</Button>

								<Button
									variant="primary"
									onClick={() => handleSubmit(props, !isLast)}
								>
									{isLast ? "Submit" : "Next"}
								</Button>
							</Stack>
						</form>
					);
				}}
			</Formik>
		</div>
	) : null;
};
