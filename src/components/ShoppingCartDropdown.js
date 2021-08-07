import React from "react";
import { connect } from "react-redux";
import { selectCartItem } from "../redux/actions/cartSelectors";
import CartItem from "./CartItem";
import CustomButton from "./CustomButton";
import "./shopping-cart-dropdown.scss";

const ShoppingCartDropdown = ({ items }) => (
	<div className="cart-dropdown">
		<div className="shopping-cart-items">
			{items.map((cartItem) => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>
		<CustomButton text="Checkout" inverted />
	</div>
);

const mapStateToProps = (state) => ({
	items: selectCartItem(state),
});
// const mapStateToProps = ({ cart: { items } }) => ({
// 	items,
// });
export default connect(mapStateToProps)(ShoppingCartDropdown);
