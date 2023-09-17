import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
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
};

export const MultiStepForm = () => {
	const steps = STEPS_MAP["test1"];

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
		if (!isLast) {
			saveData(values);
			goNext();
		} else {
			saveData(values);
			alert(JSON.stringify(formData));
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
				initialValues={formData || initialValues}
				validationSchema={currentSchema}
				onSubmit={handleSubmit}
			>
				{(props: FormikProps<IFormValues>) => {
					return (
						<Form>
							<Container>
								<Row>
									<FormView question={activeQuestion} />
								</Row>

								<Row>
									<Col>
										{!isFirst && (
											<Button variant="outline-primary" onClick={handleBack}>
												Back
											</Button>
										)}
									</Col>

									<Col style={{ display: "flex", justifyContent: "flex-end" }}>
										{!activeQuestion.isRequired && !isLast && (
											<Button variant="link" onClick={handleSkip}>
												Skip
											</Button>
										)}

										<Button variant="primary" type="submit">
											{isLast ? "Submit" : "Next"}
										</Button>
									</Col>
								</Row>
							</Container>
						</Form>
					);
				}}
			</Formik>
		</div>
	) : null;
};
