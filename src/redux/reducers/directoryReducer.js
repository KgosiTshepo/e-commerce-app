import { initialState } from "./initialState";

const directoryReducer = (state = initialState.directory, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
