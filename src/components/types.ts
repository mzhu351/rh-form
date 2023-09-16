export interface IFormValues {
	username: string;
	email: string;
	firstName: string;
	gender: string;
	age?: number;
	street?: string;
	state?: string;
	zip?: string;
}

type IdLabel = {
	id: string;
	label: string;
};

export interface IRadioFieldProps {
	name: string;
	groupLabel: string;
	options: IdLabel[];
	defaultValue?: string;
}
