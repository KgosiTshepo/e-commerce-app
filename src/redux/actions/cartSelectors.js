import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItem = createSelector([selectCart], (cart) => cart.items);

export const selectCartItemsCount = createSelector([selectCartItem], (items) =>
	items.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);
