import React from "react";
import "./checkout-item.scss";

const CheckoutItem = ({ cartItem: { imageUrl, price, name, quantity } }) => (
	<div className="checkout-item">
		<div className="image-container">
			<img src={imageUrl} alt={name} />
		</div>
		<span className="name">{name}</span>
		<span className="quantity">{quantity}</span>
		<span className="price">{price}</span>
		<button className="remove-item-button">&#10005;</button>
	</div>
);

export default CheckoutItem;
