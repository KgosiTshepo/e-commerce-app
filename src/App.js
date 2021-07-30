import { HomePage } from "./pages/Home";
import { Route, Switch } from "react-router";
import "./styles/homepage.scss";
import "./App.css";
import ShopPage from "./pages/Shop";
import Header from "./components/Header";
import SignInSignUp from "./pages/SignInSignUp";
import React from "react";
import { auth, createUserProfile } from "./services/Firebase";

class App extends React.Component {
	state = {
		currentUser: null,
	};

	unsubscribe = null;

	componentDidMount() {
		this.unsubscribe = auth.onAuthStateChanged(async (userObj) => {
			if (userObj) {
				const userRef = await createUserProfile(userObj);

				userRef.onSnapshot((snapShot) => {
					console.log("Current user: ", snapShot.data());
					this.setState(
						{
							currentUser: {
								id: snapShot.id,
								...snapShot.data(),
							},
						},
						() => console.log(this.state.currentUser, "is the new state")
					);
				});
			} else {
				this.setState({ currentUser: userObj }, () => {});
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
		console.log("What's happening here 🤔?");
		console.log(this.unsubscribe);
	}

	render() {
		return (
			<>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SignInSignUp} />
				</Switch>
			</>
		);
	}
}

export default App;
