import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingCartIcon } from "../assets/shopping-bag.svg";
import { toggleCartDropdown } from "../redux/actions/cartAction";
import { selectCartItemsCount } from "../redux/actions/cartSelectors";
import "./shopping-cart.scss";

const CartIcon = ({ toggleCartDropdown, itemsInCartCount }) => (
	<div className="shopping-cart-container" onClick={toggleCartDropdown}>
		<ShoppingCartIcon className="shopping-cart-icon" />
		<span className="item-count">{itemsInCartCount}</span>
	</div>
);
const mapStateToProps = (state) => ({
	itemsInCartCount: selectCartItemsCount(state),
});
// const mapStateToProps = ({ cart: { items } }) => ({
// 	/* reduce((accumulator,currentValue) => () => , initialValue*/
// 	itemsInCartCount: items.reduce(
// 		(accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
// 		0
// 	),
// });
const mapDispatchToProps = (dispatch) => ({
	toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
