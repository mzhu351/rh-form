import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { IStep, IQuestion, IFormValues } from "../../components/types";

import { getCongiuredQuestions } from "../util";

export const useQuestions = (
	steps: IStep[],
	questionMap: IQuestion[],
	formData?: IFormValues
) => {
	const { id: paramId } = useParams();

	// get question sequence based on config and data
	const questions = useMemo(
		() => getCongiuredQuestions(steps, questionMap, formData),
		[formData, questionMap, steps]
	);

	const activeIdx = paramId ? questions.findIndex((q) => q.id === paramId) : 0;
	const nextIdx = activeIdx >= questions.length - 1 ? activeIdx : activeIdx + 1;
	const prevIdx = activeIdx <= 0 ? activeIdx : activeIdx - 1;

	return useMemo(
		() => ({
			questions,
			activeQuestionId: questions[activeIdx].id,
			prevQuestionId: questions[prevIdx].id,
			nextQuestionId: questions[nextIdx].id,
			isFirst: activeIdx === 0,
			isLast: activeIdx === questions.length - 1,
		}),
		[activeIdx, nextIdx, prevIdx, questions]
	);
};
