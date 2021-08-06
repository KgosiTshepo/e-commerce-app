import React from "react";
import CustomButton from "./CustomButton";
import "./shopping-cart-dropdown.scss";

const ShoppingCartDropdown = () => (
	<div className="cart-dropdown">
		<div className="shopping-cart-items">
			<CustomButton text="Checkout" inverted />
		</div>
	</div>
);

export default ShoppingCartDropdown;
