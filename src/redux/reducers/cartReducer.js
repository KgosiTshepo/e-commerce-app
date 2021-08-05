import { CartActionTypes } from "../actions/cartActionTypes";
const INITIAL_STATE = {
	showCartDropDown: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				showCartDropDown: !state.showCartDropDown,
			};
		default:
			return state;
	}
};

export default cartReducer;
