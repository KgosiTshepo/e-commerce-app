import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../components/CheckoutItem";
import StripeCheckOutButton from "../components/StripeButton";
import { selectCartItem, selectCartTotal } from "../redux/selectors/cartSelector";
import "./checkout.scss";

const CheckoutPage = ({ items, priceToPay }) => {
	console.log("checkout page items", items);
	console.log("total price", priceToPay);
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				{/* {items.map(item => )} */}
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{items.map((item) => (
				<CheckoutItem key={item.id} cartItem={item} />
			))}
			<div className="price-to-pay">
				<span>
					<strong>Subtotal</strong> R{priceToPay.toFixed(2)}
				</span>
			</div>
			<StripeCheckOutButton price={priceToPay} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	items: selectCartItem,
	priceToPay: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
