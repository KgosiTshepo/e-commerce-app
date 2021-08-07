import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { toggleCartDropdown } from "../redux/actions/cartAction";
import { selectCartItem } from "../redux/selectors/cartSelector";
import CartItem from "./CartItem";
import CustomButton from "./CustomButton";
import "./shopping-cart-dropdown.scss";

const ShoppingCartDropdown = ({ items, history, toggleShoppingCartDropDown }) => {
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
			{/* WIP, clicking on checkout multiple times creates issues*/}
			<CustomButton
				text="Checkout"
				inverted
				onClick={() => {
					history.push("/checkout");
					toggleShoppingCartDropDown();
				}}
			/>
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	items: selectCartItem,
});

const mapDispatchToProps = (dispatch) => ({
	toggleShoppingCartDropDown: () => dispatch(toggleCartDropdown()),
});
// const mapStateToProps = ({ cart: { items } }) => ({
// 	items,
// });
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingCartDropdown));
