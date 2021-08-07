import { UserActionTypes } from "../actions/userActionTypes";
import { initialState } from "./initialState";

// const INITIAL_STATE = {
// 	currentUser: null,
// };

const userReducer = (state = initialState.user, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
