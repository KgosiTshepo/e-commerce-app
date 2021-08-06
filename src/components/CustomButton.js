import React from "react";
import "./custom-button.scss";

const CustomButton = ({ text, isGoogleSignIn, inverted, ...otherButtonProps }) => {
	return (
		<button
			className={`${inverted ? "inverted" : ""} ${
				isGoogleSignIn ? "google-sign-in" : ""
			} custom-button`}
			{...otherButtonProps}
		>
			{text.toUpperCase()}
		</button>
	);
};

export default CustomButton;
