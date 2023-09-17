import { useState } from "react";

import { IStep, IQuestion } from "../types";

import { getCongiuredQuestions } from "./util";

export const useQuestions = (steps: IStep[], questionMap: IQuestion[]) => {
	const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);

	const questions = getCongiuredQuestions(steps, questionMap);

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
