import React from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import "./sign-in-sign-up.scss";

const SignInSignUp = () => {
	return (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInSignUp;
