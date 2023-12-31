export interface IFormValues {
	username?: string;
	email?: string;
	firstName?: string;
	gender?: string;
	age?: number;
	sport?: string;
	flower?: string;
	retirementSavings?: number;
}

type IdLabel = {
	id: string;
	label: string;
};

type InputType =
	| "text"
	| "radioGroup"
	| "number"
	| "checkbox"
	| "checkGroup"
	| "date"
	| "password";

export interface IFieldProps {
	name: string;
	label: string;
	type?: InputType;
	options?: IdLabel[];
	defaultValue?: string;
}

export interface IQuestion {
	id: string;
	name: string;
	label: string;
	type: InputType;
	isRequired?: boolean;
	customValidation?: boolean;
	options?: IdLabel[];
	title: string;
	criteria?: string;
}

export interface IStep {
	id: string;
	label: string;
	questions: string[];
}

export interface IStepperProps {
	steps: IStep[];
	questionId: string;
}

export interface IFormViewProps {
	question: IQuestion;
}
