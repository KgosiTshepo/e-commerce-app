import { initialState } from "./initialState";

const collectionsReducer = (state = initialState.collections, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default collectionsReducer;
