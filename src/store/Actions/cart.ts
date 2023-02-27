import { CART_DETAILS } from '../Types/cart';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { CartItemType } from 'types/cart';

interface CartDetails {
  type: 'CART_DETAILS';
  cartDetails: CartItemType[];
}

export const setCartDetails = (cartDetails: CartItemType[]): CartDetails => {
  return { type: CART_DETAILS, cartDetails };
};

export const setCart = (cart: CartItemType[]): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      dispatch(setCartDetails(cart));
    } catch (err) {
      console.log(err);
    }
  };
};

export type CartActions = CartDetails;
