import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import { StepOne, StepTwo, StepThree } from "./Steps";
import { useSteps } from "./useSteps";
import { Formik, FormikProps } from "formik";
import { validationSchema } from "./validation-schema";
import { IFormValues } from "./types";

const initialValues = {
	username: "",
	email: "",
	firstName: "",
	gender: "",
};

const steps = ["stepOne", "stepTwo", "stepThree"];

const getStep = (stepIndex: number) => {
	switch (stepIndex) {
		case 0:
			return <StepOne />;
		case 1:
			return <StepTwo />;
		case 2:
			return <StepThree />;
		default:
			return "unknown step";
	}
};

export const MultiStepForm = () => {
	const { activeStep, isFirst, isLast, goNext, goBack, reset } =
		useSteps(steps);

	const handleNext = async (formikProps: FormikProps<IFormValues>) => {
		const { values, validateForm, isValid, errors } = formikProps;
		await validateForm(values);

		console.log("errors:::", errors);

		if (isValid) {
			goNext();
		}
	};

	const handleBack = async () => {
		console.log("handle back");
		goBack();
	};

	const handleReset = async () => {
		console.log("handle reset");
		reset();
	};

	const handleSubmit = async (values: IFormValues) => {
		console.log(JSON.stringify(values));
		alert(JSON.stringify(values));
	};

	const currentSchema = validationSchema[activeStep];
	console.log("currentStep::", activeStep);

	return (
		<div>
			<div
				id="status-display"
				style={{ position: "absolute", top: "1rem", right: "1rem" }}
			>
				Step {activeStep + 1} / {steps.length}
			</div>

			<Formik
				initialValues={initialValues}
				validationSchema={currentSchema}
				validateOnChange={false}
				onSubmit={() => {}}
			>
				{(props: FormikProps<IFormValues>) => {
					return (
						<form>
							{getStep(activeStep)}

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

								{isLast ? (
									<Button variant="primary" onClick={() => handleSubmit}>
										Submit
									</Button>
								) : (
									<>
										<Button variant="primary" onClick={() => handleNext(props)}>
											Next
										</Button>
									</>
								)}
							</Stack>
						</form>
					);
				}}
			</Formik>
		</div>
	);
};
