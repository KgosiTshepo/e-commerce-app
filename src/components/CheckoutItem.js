import React from "react";
import { connect } from "react-redux";
import { addItemToCart, removeItem, removeItemFromCart } from "../redux/actions/cartAction";
import "./checkout-item.scss";

const CheckoutItem = ({ cartItem, removeItem, addItemToCart, itemToRemoveFromCart }) => {
	const { imageUrl, price, name, quantity, id } = cartItem;
	console.log("cart it after deleted", cartItem);
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>

			<span className="quantity">
				<button
					className="arrow"
					aria-label="Decrease product amount"
					onClick={() => itemToRemoveFromCart(cartItem)}
				>
					&#10094;
				</button>
				<span className="value">{quantity}</span>
				<button
					className="arrow"
					aria-label="Increase product amount"
					onClick={() => addItemToCart(cartItem)}
				>
					&#10095;
				</button>
			</span>

			<span className="price">{price}</span>
			<button className="remove-item-button" onClick={() => removeItem(id)}>
				&#10005;
			</button>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	removeItem: (id) => dispatch(removeItemFromCart(id)),
	addItemToCart: (item) => dispatch(addItemToCart(item)),
	itemToRemoveFromCart: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
