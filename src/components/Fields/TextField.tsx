import { useField, useFormikContext, getIn } from "formik";

export const TextField = ({ label = "", ...props }) => {
	const [field] = useField(props as any);
	const { errors, isValid } = useFormikContext();

	const error = getIn(errors, props.name);
	const errorText = !isValid ? error : "";

	return (
		<div style={{ marginBottom: "20px", marginRight: "10px" }}>
			<div>
				<h6 style={{ fontWeight: "700" }}>{label}</h6>
				<input {...field} {...props} />
			</div>
			{error ? <div style={{ color: "red" }}>{errorText}</div> : null}
		</div>
	);
};
