import { useState } from "react";

export const useSteps = (steps: string[]) => {
	const [activeStep, setActiveStep] = useState(0);

	const goNext = () => {
		setActiveStep((i) => {
			if (i >= steps.length - 1) return i;
			return i + 1;
		});
	};

	const goBack = () => {
		setActiveStep((i) => {
			if (i <= 0) return i;
			return i - 1;
		});
	};

	const reset = () => {
		setActiveStep(0);
	};

	return {
		activeStep,
		isFirst: activeStep === 0,
		isLast: activeStep === steps.length - 1,
		goNext,
		goBack,
		reset,
	};
};
