import React from "react";
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

export default Header;
