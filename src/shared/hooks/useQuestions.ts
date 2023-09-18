import { useState } from "react";

import { IStep, IQuestion } from "../../components/types";

import { getCongiuredQuestions } from "../util";

export const useQuestions = (
	steps: IStep[],
	questionMap: IQuestion[],
	urlParamId?: string
) => {
	// figure out urlParamId's index
	const questions = getCongiuredQuestions(steps, questionMap);

	const paramIdIdx = 0;

	const [activeQuestionIdx, setActiveQuestionIdx] = useState(paramIdIdx);

	const goNext = () => {
		setActiveQuestionIdx((i) => {
			if (i >= questions.length - 1) return i;
			return i + 1;
		});
	};

	const goBack = () => {
		setActiveQuestionIdx((i) => {
			if (i <= 0) return i;
			return i - 1;
		});
	};

	const reset = () => {
		setActiveQuestionIdx(0);
	};

	return {
		questions,
		activeQuestion: questions[activeQuestionIdx],
		isFirst: activeQuestionIdx === 0,
		isLast: activeQuestionIdx === questions.length - 1,
		goNext,
		goBack,
		reset,
	};
};
