import { IStep, IQuestion } from "../components/types";

export const testVersion = "test1";

export const initialValues = {
	username: "",
	email: "",
	gender: "",
	age: "",
	sport: "",
	flower: "",
	retirementSavings: 0,
};

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
		{
			id: "registration",
			label: "Step Registration",
			questions: ["username", "email"], // list of question id
		},
		{
			id: "person",
			label: "Step Person",
			questions: ["first-name", "gender", "age"],
		},
		{
			id: "preferences",
			label: "Step Preferences",
			questions: ["sport", "flower", "retirement-savings"],
		},
	] as IStep[],
};

export const QUESTIONS_MAP = [
	{
		id: "username", // used as route param
		name: "username",
		label: "Username",
		type: "text",
		isRequired: true,
		title: "Registered username",
	},
	{
		id: "email",
		name: "email",
		label: "Email Address",
		type: "text",
		isRequired: true,
		customValidation: true,
		title: "Registered email",
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
		customValidation: true, // older than 16
		title: "How old are you?",
	},
	{
		id: "sport", // male only
		name: "sport",
		label: "Favorite sport (optional)",
		type: "text",
		isRequired: false,
		title: "What sport do you like?",
		criteria: "sportRule", // remove criteria it will always be shown
	},
	{
		id: "flower", // female only
		name: "flower",
		label: "Favorite flower (optional)",
		type: "text",
		isRequired: false,
		title: "What's your favorite flower?",
		criteria: "flowerRule",
	},
	{
		id: "retirement-savings", // gender not null and age >= 50 only
		name: "retirementSavings",
		label: "Retirement savings (optional)",
		type: "number",
		isRequired: false,
		title: "What's your retirement savings?",
		customValidation: true, // no negatives
		criteria: "retSavingsRule",
	},
] as IQuestion[];
