import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";

export default function PasswordField(props) {
	return (
		<Fragment>
			<Field
				class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
				placeholder=""
				type="password"
				name={props.name}
				style={
					props.errors[props.name] && props.touched[props.name]
						? {
								border: "1px solid red",
						  }
						: {}
				}
			>
				{({ field, form, meta }) => (
					<div>
						{meta.touched && meta.error ? (
							<input
								className="error"
								type="text"
								{...field}
								placeholder="First Name"
							/>
						) : (
							<input
								type="text"
								{...field}
								placeholder="First Name"
							/>
						)}
					</div>
				)}
			</Field>
			<ErrorMessage
				component="div"
				name={props.name}
				className="text-red-600 text-xs"
			/>
		</Fragment>
	);
}
