import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./App.css";
import Header from "./components/Header";
import CheckoutPage from "./pages/Checkout";
import { HomePage } from "./pages/Home";
import ShopPage from "./pages/Shop";
import SignInSignUp from "./pages/SignInSignUp";
import { setCurrentUser } from "./redux/actions/userAction";
import { selectCurrentUser } from "./redux/selectors/userSelector";
import { auth, createUserProfile } from "./services/Firebase";
import "./styles/homepage.scss";

class App extends React.Component {
	unsubscribe = null;

	componentDidMount() {
		/* Destructure the props in order to grab the setCurrentUser action creator */
		const { setCurrentUser } = this.props;
		this.unsubscribe = auth.onAuthStateChanged(async (userObj) => {
			if (userObj) {
				const userRef = await createUserProfile(userObj);

				userRef.onSnapshot((snapShot) => {
					console.log("Current user: ", snapShot.data());
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else {
				setCurrentUser(userObj);
			}
		});
	}

	componentWillUnmount() {
		// unsubscribe from the observable oAuthStateChanged
		this.unsubscribe();
		console.log("Hey dude,what's happening here 🤔?");
		console.log(this.unsubscribe);
	}

	render() {
		return (
			<>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
						}
					/>
				</Switch>
			</>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	/*https://stackoverflow.com/questions/64369792/redux-connect-mapdispatchtoprops-pass-in-the-result-of-an-action-creator/64372380#64372380*/
});

/* connect() connects a given component in order to give it access to the store.
 * Takes two parameters connect(mapStateToProps,mapDispatchToProps)
 * mapStateToProps receives the entire application state object.From the store then we can attach a piece of state a components needs.
 * mapDispatchToProps dispatches actions , it can be either a function or an object. The key we return from here will be used as a prop to the connected component.
 * Use these params as a way to decide what is passed to the connected component.
 * In this case App component does not need any state hence we pass null as the first param.
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
