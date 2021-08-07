import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItem } from "../redux/selectors/cartSelectors";
import CartItem from "./CartItem";
import CustomButton from "./CustomButton";
import "./shopping-cart-dropdown.scss";

const ShoppingCartDropdown = ({ items }) => {
	console.log("items", items);
	return (
		<div className="cart-dropdown">
			<div className="shopping-cart-items">
				{items.length ? (
					items.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
				) : (
					<span className="empty-cart">Your cart is empty.</span>
				)}
			</div>
			<CustomButton text="Checkout" inverted />
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	items: selectCartItem,
});
// const mapStateToProps = ({ cart: { items } }) => ({
// 	items,
// });
export default connect(mapStateToProps)(ShoppingCartDropdown);
