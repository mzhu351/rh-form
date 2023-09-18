import { IStep, IQuestion } from "../components/types";

export const testVersion = "test1";

export const genderOptions = [
	{
		id: "male",
		label: "Male",
	},
	{
		id: "female",
		label: "Female",
	},
];

export const STEPS_MAP = {
	test1: [
		{ id: "login", label: "Step Login", questions: ["username", "email"] },
		{
			id: "person",
			label: "Step Person",
			questions: ["firstName", "gender", "age"],
		},
		{
			id: "address",
			label: "Step Address",
			questions: ["street", "state"],
		},
	] as IStep[],
};

export const QUESTIONS_MAP = [
	{
		id: "username", // can use for route param
		name: "username",
		label: "Username",
		type: "text",
		isRequired: true,
		title: "Registered username",
	},
	{
		id: "email",
		name: "email",
		label: "Email",
		type: "text",
		isRequired: true,
		title: "Registered email",
	},
	{
		id: "first-name",
		name: "firstName",
		label: "First Name",
		type: "text",
		isRequired: true,
		title: "What others call you",
	},
	{
		id: "gender",
		name: "gender",
		label: "Gender",
		type: "radioGroup",
		options: genderOptions,
		isRequired: true,
		title: "You identify as",
	},
	{
		id: "age",
		name: "age",
		label: "Age (optional)",
		type: "number",
		isRequired: false,
		title: "How old are you?",
	},
	{
		id: "street",
		name: "street",
		label: "Street (optional)",
		type: "text",
		isRequired: false,
		title: "Which street do you live?",
	},
	{
		id: "state",
		name: "state",
		label: "State (optional)",
		type: "text",
		isRequired: false,
		title: "Which state do you live?",
	},
] as IQuestion[];
