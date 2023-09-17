import * as Yup from "yup";

import { IQuestion } from "./types";

export const getValidationSchema = ({ name, isRequired = true }: IQuestion) => {
	const schemaObj = { [name]: Yup.string().required("Field required") };
	return isRequired ? Yup.object().shape(schemaObj) : null;
};
