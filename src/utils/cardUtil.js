export const addItemToCart = (cartItems, itemToAddToCart) => {
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

export const removeItemFromCart = (cartItems, itemToRemove) => {
	const existingCartItem = cartItems.find((item) => item.id === itemToRemove.id);
	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cardItem) => cardItem.id !== itemToRemove.id);
	} else {
		return cartItems.map((cartItem) =>
			cartItem.id === itemToRemove.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		);
	}
};
