import { Field } from "formik";

import { IRadioFieldProps } from "../types";

export const RadioGroupField = ({
	name,
	groupLabel,
	options,
}: IRadioFieldProps) => {
	return (
		<div style={{ marginBottom: "20px", marginRight: "10px" }}>
			<div
				id="radio-group"
				style={{ fontWeight: "700", fontSize: "16px", marginBottom: "5px" }}
			>
				{groupLabel}
			</div>

			<div role="group" aria-labelledby="radio-group">
				{options.map(({ id, label }) => {
					return (
						<label style={{ marginRight: "30px" }}>
							<Field type="radio" name={name} value={id} />
							<span style={{ paddingLeft: "10px" }}>{label}</span>
						</label>
					);
				})}
			</div>
		</div>
	);
};
