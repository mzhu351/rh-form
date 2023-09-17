import { IStep, IQuestion } from "../types";

export const getCongiuredQuestions = (
	steps: IStep[],
	questionMap: IQuestion[]
) => {
	const questionIds: string[] = [];
	const list: IQuestion[] = [];

	steps.forEach((step) => {
		step.questions.forEach((questionId) => questionIds.push(questionId));
	});
	console.log("questionIds::", questionIds);
	questionMap.forEach((qItem) => {
		questionIds.forEach((questionId: string) => {
			if (questionId === qItem.id) {
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
