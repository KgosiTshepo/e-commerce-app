import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;
export const selectDirectorySections = createSelector(
	[selectDirectory],
	(directory) => directory.sections
);

/* This is overkill, should not have used a selector since this is static data.
 *  Shifting all your computation away from your components into reselect is important for scalability, and in certain cases avoiding re-renders.
 */
