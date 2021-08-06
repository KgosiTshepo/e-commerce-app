import addItemToCart from "../../utils/cardUtil";
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
		case CartActionTypes.ADD_ITEMS:
			return {
				...state,
				items: addItemToCart(state.items, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
