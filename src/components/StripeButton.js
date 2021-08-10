import React from "react";
import { withRouter } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckOutButton = ({ price, history }) => {
	const stripe_price = price * 10;
	const publishableKey = process.env.REACT_APP_APP_PUBLISHABLE_KEY;

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
		history.push("/shop");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="Takealot"
			billingAddress
			shippingAddress
			description={`Total price is R${price}`}
			amount={stripe_price}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default withRouter(StripeCheckOutButton);
