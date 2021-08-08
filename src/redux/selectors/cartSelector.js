import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItem = createSelector([selectCart], (cart) => cart.items);
export const selectShowCartDropDown = createSelector([selectCart], (cart) => cart.showCartDropDown);

export const selectCartItemsCount = createSelector([selectCartItem], (items) =>
	items.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItem], (items) =>
	items.reduce(
		(accumulatedCartTotal, cartItem) =>
			accumulatedCartTotal + cartItem.quantity * cartItem.price,
		0
	)
);
