import React from "react";
import { auth, SignInWithGoogle } from "../services/Firebase";
import CustomButton from "./CustomButton";
import FormInput from "./FormInput";
import "./sign-in.scss";

class SignIn extends React.Component {
	state = {
		email: "",
		password: "",
	};

	onSignInSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			// Sign in with email and password
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" }, () => console.log("LoggedIn using email and password"));
		} catch (error) {
			console.log(`${error.message}`);
		}
	};
	onChangeHandler = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		const { email, password } = this.state;
		return (
			<div className="sign-in">
				<h2 className="title">Already have an account ?</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.onSignInSubmit}>
					<FormInput name="email" type="email" label="email" value={email} onChangeHandler={this.onChangeHandler} required />

					<FormInput name="password" type="password" label="password" value={password} onChangeHandler={this.onChangeHandler} required />
					<div className="buttons">
						<CustomButton type="submit" text="Sign in" />
						<CustomButton type="button" onClick={SignInWithGoogle} text="Sign in with Google" isGoogleSignIn />
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
