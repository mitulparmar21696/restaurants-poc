import { CartActions } from '../Actions/cart';
import { CART_DETAILS } from '../Types/cart';
import { CartItemType } from 'types/cart';

// States' definition
export interface Cart {
  cartDetails: CartItemType[];
}
const initialState: Cart = {
  cartDetails: []
};
const cartReducer = (state: Cart = initialState, action: CartActions): Cart => {
  switch (action.type) {
    case CART_DETAILS:
      return { ...state, cartDetails: action.cartDetails };

    default:
      return state;
  }
};
export default cartReducer;
