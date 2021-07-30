import React from "react";
import "./custom-button.scss";

const CustomButton = ({ text, isGoogleSignIn, ...otherButtonProps }) => {
	return (
		<button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherButtonProps}>
			{text.toUpperCase()}
		</button>
	);
};

export default CustomButton;
