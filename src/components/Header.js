import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { auth } from "../services/Firebase";
import "./header.scss";

const Header = ({ currentUser }) => {
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
				{/* </Link> */}
			</div>
		</div>
	);
};

/* connect() connects a given component in order to give it access to the store.
 * mapStateToProps receives the entire application state object.From the store then we can attach a piece of state a components needs.
 * In this case Header component needs information about the current user , auth object we get from firestore
 */
const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
