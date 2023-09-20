import { Container, Row, Col, Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

import {
	STEPS_MAP,
	QUESTIONS_MAP as questionMap,
	testVersion,
	initialValues,
	useQuestions,
	useSession,
	util,
} from "../shared";

import { FormView } from "./FormView";
import { Stepper } from "./Stepper";
import { getValidationSchema } from "./validation-schema";
import { IFormValues } from "./types";

export const MultiStepForm = () => {
	const steps = STEPS_MAP[testVersion];
	const navigate = useNavigate();

	const { value: formData, setValue: saveData } = useSession(
		"test1",
		initialValues
	);

	const {
		questions,
		activeQuestionId,
		prevQuestionId,
		nextQuestionId,
		isFirst,
		isLast,
	} = useQuestions(steps, questionMap, formData);

	const activeQuestion = questions.find((q) => q.id === activeQuestionId);

	const handleBack = async () => {
		// discard changes on current question
		navigate(`/questions/${prevQuestionId}`);
	};

	const handleNext = async () => {
		// for optional
		navigate(`/questions/${nextQuestionId}`);
	};

	const handleSubmit = async (values: IFormValues) => {
		// formik won't allow sumbit with invalid form
		const updatedValue = util.mapFormToValue(values);
		await saveData(updatedValue);

		if (!isLast) {
			handleNext();
		} else {
			navigate("/completed");
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
				validateOnChange={false}
				onSubmit={handleSubmit}
			>
				{() => {
					return (
						<Form>
							<Container>
								{/* Form Content secton */}
								<Row>
									<FormView question={activeQuestion} />
								</Row>

								{/* Action buttons */}
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
											<Button variant="link" onClick={handleNext}>
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
