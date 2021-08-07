import { CartActionTypes } from "./cartActionTypes";

export const toggleCartDropdown = () => ({
	type: CartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItemToCart = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item,
});
export const removeItemFromCart = (id) => ({
	type: CartActionTypes.REMOVE_ITEM_FROM_CART,
	payload: id,
});
