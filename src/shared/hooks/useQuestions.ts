import { useState } from "react";

import { IStep, IQuestion } from "../../components/types";

import { getCongiuredQuestions } from "../util";

export const useQuestions = (
	steps: IStep[],
	questionMap: IQuestion[],
	paramId?: string
) => {
	// figure out urlParamId's index
	const questions = getCongiuredQuestions(steps, questionMap);

	const paramIdx = paramId ? questions.findIndex((q) => q.id === paramId) : 0;
	console.log("paramIdx::", paramIdx);
	const [activeQuestionIdx, setActiveQuestionIdx] = useState(paramIdx);

	const goNext = () => {
		setActiveQuestionIdx((i) => {
			if (i >= questions.length - 1) {
				return i;
			}
			return i + 1;
		});
	};

	const goBack = () => {
		setActiveQuestionIdx((i) => {
			if (i <= 0) {
				return i;
			}
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
