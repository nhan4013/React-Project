import { createSelector } from 'reselect';

export const selectCartItems = (state) => state.cartItems;

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
      cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
          accumulatedQuantity + cartItem.quantity,
        0
      )
  );

  export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);