import * as Yup from "yup";

export const validationSchema = [
	// step one
	Yup.object().shape({
		username: Yup.string().required("username required"),
		email: Yup.string().required("email required"),
	}),
	// step two
	Yup.object().shape({
		firstName: Yup.string().required("first name required"),
		gender: Yup.string().required("gender required"),
	}),
	// step three
	Yup.object().shape({
		street: Yup.string().required("street required"),
		state: Yup.string().required("state required"),
		zip: Yup.string().required("zip code required"),
	}),
];
