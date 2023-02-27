import uniqBy from 'lodash/uniqBy';

import { CartActions } from '../Actions/cart';
import { CART_DETAILS } from '../Types/cart';
// States' definition
export interface Cart {}
const initialState: Cart = {};
const cartReducer = (state: Cart = {}, action: CartActions): Cart => {
  switch (action.type) {
    case CART_DETAILS:
      return { ...state, isGuestUser: action.isFetching };

    default:
      return state;
  }
};
export default cartReducer;
