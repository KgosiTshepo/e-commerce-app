import React from "react";
import { withRouter } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckOutButton = ({ price, history }) => {
	const stripe_price = price * 10;
	const publishableKey =
		"pk_test_51JMxHGD9Y0RJhlpdg29mj5EGPjVyvzPOKzHjzR8OW6XcYiMPgX5dEKi9x8hi3soPhWfqEtA74gujwppsyWfPJtuo00lX3HeE4W";
	const onToken = (token) => {
		// console.log(token);
		// alert("Payment Successful");
		history.push("/");
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
