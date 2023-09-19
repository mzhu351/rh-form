import { IStep, IQuestion } from "../../components/types";

import { getCongiuredQuestions } from "../util";

export const useQuestions = (
	steps: IStep[],
	questionMap: IQuestion[],
	paramId?: string
) => {
	// figure out urlParamId's index
	const questions = getCongiuredQuestions(steps, questionMap);

	const activeIdx = paramId ? questions.findIndex((q) => q.id === paramId) : 0;
	const nextIdx = activeIdx >= questions.length - 1 ? activeIdx : activeIdx + 1;
	const prevIdx = activeIdx <= 0 ? activeIdx : activeIdx - 1;

	return {
		questions,
		activeQuestionId: questions[activeIdx].id,
		prevQuestionId: questions[prevIdx].id,
		nextQuestionId: questions[nextIdx].id,
		isFirst: activeIdx === 0,
		isLast: activeIdx === questions.length - 1,
	};
};
