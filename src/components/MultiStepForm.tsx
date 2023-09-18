import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Form, FormikProps } from "formik";

import { FormView } from "./FormView";
import { STEPS_MAP, QUESTIONS_MAP as questionMap } from "../shared/constants";
import { useQuestions, useSession } from "../shared/hooks";
import { Stepper } from "./Stepper";
import { getValidationSchema } from "./validation-schema";
import { IFormValues, IMultiStepFormProps } from "./types";

const initialValues = {
	username: "",
	email: "",
	firstName: "",
	gender: "",
	age: undefined,
	street: "",
	state: "",
};

export const MultiStepForm = ({ questionId }: IMultiStepFormProps) => {
	const steps = STEPS_MAP["test1"];

	const {
		activeQuestion,
		isFirst,
		isLast,
		goNext,
		goBack,
		reset: goBackFirstField,
	} = useQuestions(steps, questionMap);

	const {
		value: formData,
		setValue: saveData,
		clear: clearData,
	} = useSession("test1", initialValues);

	const handleBack = async () => {
		// discard changes on current question
		goBack();
	};

	const handleSkip = async () => {
		// for optional
		goNext();
	};

	const handleReset = async (props: FormikProps<IFormValues>) => {
		// reset form and clear sessionStorage
		clearData("test1");
		props.resetForm();
		// go back to first page
		goBackFirstField();
	};

	const handleSubmit = async (values: IFormValues) => {
		// formik won't allow sumbit with invalid form
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
				enableReintialize
				onSubmit={handleSubmit}
			>
				{(props: FormikProps<IFormValues>) => {
					console.log("props::", props);
					return (
						<Form>
							<Container>
								<Row>
									<FormView question={activeQuestion} />
								</Row>

								<Row>
									<Col>
										{!isFirst && (
											<>
												<Button variant="outline-primary" onClick={handleBack}>
													Back
												</Button>
												<Button
													variant="link"
													onClick={() => handleReset(props)}
												>
													Reset
												</Button>
											</>
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
