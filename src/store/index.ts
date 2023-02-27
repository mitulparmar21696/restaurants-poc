import { createStore, combineReducers, applyMiddleware } from 'redux';
// import showDashboard, { ShowDashboard } from "./Reducers/showDashboard"
import cartReducer, { Cart } from './Reducers/cart';
import thunk from 'redux-thunk';
export interface RootState {
  cartReducer: Cart;
}
export default createStore(
  combineReducers<RootState>({
    cartReducer
  }),
  applyMiddleware(thunk)
);
