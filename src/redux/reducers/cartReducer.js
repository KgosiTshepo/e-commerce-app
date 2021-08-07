import { addItemToCart, removeItemFromCart } from "../../utils/cardUtil";
import { CartActionTypes } from "../actions/cartActionTypes";
import { initialState } from "./initialState";
// const INITIAL_STATE = {
// 	showCartDropDown: false,
// 	items: [],
// };

const cartReducer = (state = initialState.cart, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				showCartDropDown: !state.showCartDropDown,
			};
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				items: addItemToCart(state.items, action.payload),
			};
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				items: removeItemFromCart(state.items, action.payload),
			};
		case CartActionTypes.REMOVE_ITEM_FROM_CART:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
