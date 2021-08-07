const addItemToCart = (cartItems, itemToAddToCart) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToAddToCart.id);
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === itemToAddToCart.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...itemToAddToCart, quantity: 1 }];
};

export default addItemToCart;
