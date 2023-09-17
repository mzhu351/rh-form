import * as React from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Formik, Form, FormikProps } from "formik";

import { FormView } from "./FormView";
import { STEPS_MAP, QUESTIONS_MAP as questionMap } from "./constants";
import { useQuestions } from "./hooks";
import { Stepper } from "./Stepper";
import { getValidationSchema } from "./validation-schema";
import { IFormValues } from "./types";

export const MultiStepForm = () => {
	const steps = STEPS_MAP["test1"];
	const formRef = React.useRef<FormikProps<IFormValues>>(null);

	React.useEffect(() => {
		console.log("formRef::", formRef.current);
	}, []);

	const { activeQuestion, isFirst, isLast, goNext, goBack, reset } =
		useQuestions(steps, questionMap);

	const handleBack = async () => {
		// discard changes on current question
		goBack();
	};

	const handleReset = async () => {
		// reset form=> wipe out sessionStorage and go back
		reset();
	};

	const handleSubmit = (values: IFormValues) => {
		console.log("35, handleSubmit: values", values);

		if (!isLast) {
			if (formRef.current?.isValid) {
				console.log("go next");
				goNext();
			}
		} else {
			// todo; get from SessionStorageFull value and display on alert
			if (formRef.current?.isValid) {
				console.log("mark submit");
				alert(JSON.stringify(values));
			}
		}
	};

	const initialValues = {
		username: "",
		email: "",
		firstName: "",
		gender: "",
		age: undefined,
		street: "",
		state: "",
		zip: undefined,
	};

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
				onSubmit={handleSubmit}
				innerRef={formRef}
			>
				{(props: FormikProps<IFormValues>) => {
					return (
						<Form>
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

								<Button variant="primary" type="submit">
									{isLast ? "Submit" : "Next"}
								</Button>
							</Stack>
						</Form>
					);
				}}
			</Formik>
		</div>
	) : null;
};
