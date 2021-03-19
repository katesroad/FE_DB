import * as React from "react";
import PropTypes from "prop-types";
import { Input, FormControl, Label } from "./styles";

export { FormControl, Label } from "./styles";

const Field = ({ children, name, className, ...props }) => (
	<FormControl className={className}>
		<Label>
			{/* to place icon */}
			{children}
			<Input name={name} id={name} {...props} />
		</Label>
	</FormControl>
);
Field.defaultPropTypes = {
	type: "text",
	value: "",
	className: "",
};
Field.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.oneOf(["text", "checkbox"]),
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string,
};

export default React.memo(Field);
