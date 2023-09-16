import { FormView } from "./FormView";
import { TextField, RadioGroupField } from "./Fields";
import { genderOptions } from "./constants";

export const StepOne = () => {
	return (
		<FormView title="User Login">
			<TextField label="Username" name="username" />
			<TextField label="Email" name="email" />
		</FormView>
	);
};

export const StepTwo = () => {
	return (
		<FormView title="User Details">
			<TextField label="First Name" name="firstName" />

			<RadioGroupField
				name="gender"
				groupLabel="Gender"
				options={genderOptions}
			/>

			<TextField label="Age (optional)" name="age" type="number" />
		</FormView>
	);
};

export const StepThree = () => {
	return (
		<FormView title="Address">
			<TextField label="Street (optional)" name="street" />
			<TextField label="State (optional)" name="state" />
			<TextField label="Zip Code (optional)" name="zip" />
		</FormView>
	);
};
