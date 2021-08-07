import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { selectShowCartDropDown } from "../redux/selectors/cartSelectors";
import { selectCurrentUser } from "../redux/selectors/userSelector";
import { auth } from "../services/Firebase";
import CartIcon from "./CartIcon";
import "./header.scss";
import ShoppingCartDropdown from "./ShoppingCartDropdown";

const Header = ({ currentUser, showCartDropDown }) => {
	console.log("What's the current user on the header component?", currentUser);
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo />
			</Link>
			<div className="options-container">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{/* <Link className="option" to="/signup"> */}
				{currentUser ? (
					<div
						className="option"
						onClick={async () =>
							// Sign-out successful.
							await auth.signOut()
						}
					>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{showCartDropDown ? <ShoppingCartDropdown /> : null}
		</div>
	);
};

/* connect() connects a given component in order to give it access to the store.
 * mapStateToProps receives the entire application state object.From the store then we can attach a piece of state a components needs.
 * In this case Header component needs information about the current user , auth object we get from firestore
 */
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	showCartDropDown: selectShowCartDropDown,
});
// const mapStateToProps = ({ user: { currentUser }, cart: { showCartDropDown } }) => ({
// 	currentUser,
// 	showCartDropDown,
// });
export default connect(mapStateToProps)(Header);
