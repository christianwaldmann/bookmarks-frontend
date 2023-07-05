import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";

export default function CustomField(props) {
	return (
		<Fragment>
			<Field
				class="appearance-none bg-gray-50 dark:bg-gray-800 rounded relative block w-full px-3 py-2 border border-gray-300 dark:border-transparent placeholder-gray-500 text-gray-900 dark:text-gray-100 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
				placeholder={props.placeholder}
				type={props.type}
				name={props.name}
				style={
					props.errors[props.name] && props.touched[props.name]
						? {
								border: "1px solid red",
						  }
						: {}
				}
				validate={props.validate}
				children={props.children}
			/>
			<ErrorMessage
				component="div"
				name={props.name}
				className="text-red-600 text-xs"
			/>
		</Fragment>
	);
}
