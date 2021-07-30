import React from "react";
import "./form-input.scss";

const FormInput = ({ label, onChangeHandler, ...otherFormInputProps }) => {
	return (
		<div className="group">
			<input className="form-input" onChange={onChangeHandler} {...otherFormInputProps} />
			{label ? <label className={`${otherFormInputProps.value.length ? "shrink" : ""} form-input-label`}>{label.toUpperCase()}</label> : null}
		</div>
	);
};

export default FormInput;
