import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingCartIcon } from "../assets/shopping-bag.svg";
import { toggleCartDropdown } from "../redux/actions/cartAction";
import "./shopping-cart.scss";

const CartIcon = ({ toggleCartDropdown }) => (
	<div className="shopping-cart-container" onClick={toggleCartDropdown}>
		<ShoppingCartIcon className="shopping-cart-icon" />
		<span className="item-count">0</span>
	</div>
);
const mapDispatchToProps = (dispatch) => ({
	toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
