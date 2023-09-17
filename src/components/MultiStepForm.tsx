import * as React from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Formik, Form, FormikProps } from "formik";

import { FormView } from "./FormView";
import { STEPS_MAP, QUESTIONS_MAP as questionMap } from "./constants";
import { useQuestions, useSession } from "./hooks";
import { Stepper } from "./Stepper";
import { getValidationSchema } from "./validation-schema";
import { IFormValues } from "./types";

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

// const mapFormToModel = (values: IFormvV)

export const MultiStepForm = () => {
	const steps = STEPS_MAP["test1"];
	const formRef = React.useRef<FormikProps<IFormValues>>(null);

	const { activeQuestion, isFirst, isLast, goNext, goBack } = useQuestions(
		steps,
		questionMap
	);

	const { value: formData, setValue: saveData } = useSession(
		"test1",
		initialValues
	);

	const handleBack = async () => {
		// discard changes on current question
		goBack();
	};

	const handleSkip = async () => {
		// for optional
		goNext();
	};

	const handleSubmit = async (values: IFormValues) => {
		console.log("35, handleSubmit: values", values);

		if (!isLast) {
			if (formRef.current?.isValid) {
				saveData(values);
				goNext();
			}
		} else {
			if (formRef.current?.isValid) {
				console.log("mark submit");
				saveData(values);
				alert(formData);
			}
		}
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

								{!activeQuestion.isRequired && (
									<Button
										variant="link"
										className="ms-auto"
										onClick={handleSkip}
									>
										Skip
									</Button>
								)}

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
