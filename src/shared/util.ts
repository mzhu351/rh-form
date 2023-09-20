import { IStep, IQuestion, IFormValues } from "../components/types";

export const canShowField = (question: IQuestion, formData?: IFormValues) => {
	if (!question.criteria) {
		return true;
	}

	// define custom logic rules based on user data
	switch (question.criteria) {
		case "sportRule":
			const canShowSport = formData?.gender === "male";
			return canShowSport;

		case "flowerRule":
			const canShowFlower = formData?.gender === "female";
			return canShowFlower;

		case "retSavingsRule":
			if (!formData?.gender || !formData?.age) {
				return false;
			}
			const canShowRetGoal = !!(
				formData?.gender &&
				formData.age &&
				formData.age >= 50
			);
			return canShowRetGoal;

		default:
			return false;
	}
};

export const getCongiuredQuestions = (
	steps: IStep[],
	questionMap: IQuestion[],
	formData?: IFormValues
) => {
	const questionIds: string[] = [];
	const list: IQuestion[] = [];

	steps.forEach((step) => {
		step.questions.forEach((questionId) => questionIds.push(questionId));
	});

	questionIds.forEach((questionId) => {
		questionMap.forEach((qItem) => {
			if (qItem.id === questionId && canShowField(qItem, formData)) {
				list.push(qItem);
			}
		});
	});

	return list;
};

export const getStepByQuestionId = (steps: IStep[], questionId: string) => {
	let matchedStep = steps[0];

	steps.forEach((step) => {
		if (step.questions?.find((item: string) => item === questionId)) {
			matchedStep = step;
		}
	});

	return matchedStep;
};
