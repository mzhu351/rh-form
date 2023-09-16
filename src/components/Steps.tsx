import { FormView } from "./FormView";
import { TextField } from "./Fields/TextField";

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

			<h6 style={{ fontWeight: "700" }}>Gender</h6>
			<div style={{ display: "flex", marginBottom: "20px" }}>
				<div style={{ marginRight: "20px" }}>
					<input type="radio" id="female" name="gender" />
					<label htmlFor="gender">Male</label>
				</div>

				<div>
					<input type="radio" id="female" name="gender" />
					<label htmlFor="gender">Female</label>
				</div>
			</div>

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
