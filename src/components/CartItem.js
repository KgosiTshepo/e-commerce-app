import React from "react";
import "./cart-item.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
	let pricePerQuantity = price * quantity;

	return (
		<div className="cart-item">
			<img src={imageUrl} alt={name} />
			<div className="cart-item-details">
				<span className="cart-item-name">{name}</span>
				<span className="price-per-quantity">R {pricePerQuantity}</span>
				<span className="quantity">Quantity: {quantity}</span>
			</div>
		</div>
	);
};

export default CartItem;
