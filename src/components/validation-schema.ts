import * as Yup from "yup";

import { IQuestion } from "./types";

const customSchemaList = {
	email: Yup.string().required("Email required").email("Invalid Email format"),
	age: Yup.number()
		.typeError("must be a number")
		.nullable()
		.min(16, "must be older than 16")
		.max(120, "must be younger than 121"),
};

const getQuestionSchema = (name: string, customValidation?: boolean) => {
	if (customValidation) {
		return { [name]: (customSchemaList as any)[name] };
	}

	return { [name]: Yup.string().required("Field required") };
};

export const getValidationSchema = ({
	name,
	isRequired = true,
	customValidation = false,
}: IQuestion) => {
	if (customValidation) {
		return Yup.object().shape(getQuestionSchema(name, customValidation));
	}
	return isRequired ? Yup.object().shape(getQuestionSchema(name)) : null;
};
