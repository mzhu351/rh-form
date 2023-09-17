import { Field, useField } from "formik";

import { IFieldProps } from "../types";

export const RadioGroupField = ({ name, label, options }: IFieldProps) => {
	const [, meta] = useField(name);

	return (
		<div style={{ marginBottom: "20px", marginRight: "10px" }}>
			<div
				id="radio-group"
				style={{ fontWeight: "700", fontSize: "16px", marginBottom: "5px" }}
			>
				{label}
			</div>

			<div role="group" aria-labelledby="radio-group">
				{options?.map(({ id, label }) => {
					return (
						<label style={{ marginRight: "30px" }} key={id}>
							<Field type="radio" name={name} value={id}></Field>
							<span style={{ paddingLeft: "10px" }}>{label}</span>
						</label>
					);
				})}
			</div>

			{meta.touched && meta.error ? (
				<div style={{ color: "red" }}>{meta.error}</div>
			) : null}
		</div>
	);
};
