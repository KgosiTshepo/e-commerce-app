import { createSelector } from "reselect";

const selectCollections = (state) => state.collections;

export const selectCollectionItems = createSelector(
	[selectCollections],
	(collections) => collections
);
