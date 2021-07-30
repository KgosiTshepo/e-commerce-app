import React from "react";
import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import { auth, createUserProfile } from "../services/Firebase";
import "./sign-up.scss";
class SignUp extends React.Component {
	state = {
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};

	onSignUpSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			console.log("Passwords don't match");
			return;
		}
		try {
			// create a user profile
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			console.log(user);
			await createUserProfile(user, { displayName });
			console.log(displayName);
			// clear form controls
			this.setState({ displayName: "", email: "", password: "", confirmPassword: "" }, () => console.log("clearing form controls!"));
		} catch (error) {
			console.log(error);
		}
	};
	onChangeHandler = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<div className="sign-up">
				<h2 className="title">Create an account </h2>
				<span>Sign up with your email and password</span>
				<form onSubmit={this.onSignUpSubmit}>
					<FormInput name="displayName" type="text" label="username" value={displayName} onChangeHandler={this.onChangeHandler} required />
					<FormInput name="email" type="email" label="email" value={email} onChangeHandler={this.onChangeHandler} required />

					<FormInput name="password" type="password" label="password" value={password} onChangeHandler={this.onChangeHandler} required />
					<FormInput name="confirmPassword" type="password" label="confirm password" value={confirmPassword} onChangeHandler={this.onChangeHandler} required />
					<div className="buttons">
						<CustomButton type="submit" text="Sign up" />
					</div>
				</form>
			</div>
		);
	}
}
export default SignUp;
