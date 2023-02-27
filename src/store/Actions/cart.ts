import { CART_DETAILS } from '../Types/cart';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
interface CartDetails {
  type: 'CART_DETAILS';
  isFetching: boolean;
}

export const isFetching = (isFetching: boolean): CartDetails => {
  return { type: CART_DETAILS, isFetching };
};

export const fetchRooms = (userId: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      dispatch(isFetching(true));
    } catch (err) {
      console.log(err);
      dispatch(isFetching(false));
    }
  };
};

export type CartActions = CartDetails;
