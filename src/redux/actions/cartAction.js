import { CartActionTypes } from "./cartActionTypes";

export const toggleCartDropdown = () => ({
	type: CartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItemToCart = (item) => ({
	type: CartActionTypes.ADD_ITEMS,
	payload: item,
});
