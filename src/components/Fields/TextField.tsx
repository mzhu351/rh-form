import { Field, FieldProps } from "formik";

import { IFieldProps } from "../types";

export const TextField = (props: IFieldProps) => {
	return (
		<div style={{ marginBottom: "20px", marginRight: "10px" }}>
			<Field {...props}>
				{({ field, meta }: FieldProps) => (
					<div>
						<h6 style={{ fontWeight: "700" }}>{props.label}</h6>
						<input {...field} {...props} />
						{meta.touched && meta.error ? (
							<div style={{ color: "red" }}>{meta.error}</div>
						) : null}
					</div>
				)}
			</Field>
		</div>
	);
};
