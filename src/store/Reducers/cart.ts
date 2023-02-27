import { CartActions } from 'store/Actions/cart';
import { CART_DETAILS } from 'store/Types/cart';
import { CartItemType, PizzaType, Offers } from 'types/cart';

// States' definition
export interface Cart {
  cartDetails: CartItemType[];
  pizzaList: PizzaType[];
  Offers: Offers[];
}
const initialState: Cart = {
  cartDetails: [],
  pizzaList: [
    {
      id: 1,
      name: 'Small Pizza',
      description: "10'' pizza for one person",
      price: 11.99,
      url: 'https://i.ibb.co/gjmBd5G/saahil-khatkhate-kf-Ds-MDy-X1-K0-unsplash.jpg'
    },
    {
      id: 2,
      name: 'Medium Pizza',
      description: "12'' Pizza for two persons",
      price: 15.99,
      url: 'https://i.ibb.co/BPM44QG/shourav-sheikh-a66s-Gf-Onnq-Q-unsplash.jpg'
    },
    {
      id: 3,
      name: 'Large Pizza',
      description: "15'' Pizza for four persons",
      price: 21.99,
      url: 'https://i.ibb.co/VY93Dqx/sahal-hameed-Nq9-Kl-QTTEb-Q-unsplash.jpg'
    }
  ],
  Offers: [
    {
      id: 1,
      products: [],
      offerParameters: {},
      offerType: 'FixedDiscount',
      isOfferForAll: false,
      discountName: 'Default'
    },
    {
      id: 2,
      products: [
        {
          id: 1,
          name: 'Small Pizza',
          description: "10'' pizza for one person",
          price: 11.99,
          url: 'https://i.ibb.co/gjmBd5G/saahil-khatkhate-kf-Ds-MDy-X1-K0-unsplash.jpg'
        }
      ],
      offerParameters: {
        get: 3,
        pay: 2
      },
      offerType: 'BuyMorePayLess',
      isOfferForAll: false,
      discountName: 'Microsoft'
    },

    {
      id: 3,
      products: [
        {
          id: 3,
          name: 'Large Pizza',
          description: "15'' Pizza for four persons",
          price: 21.99,
          url: 'https://i.ibb.co/VY93Dqx/sahal-hameed-Nq9-Kl-QTTEb-Q-unsplash.jpg'
        }
      ],
      offerParameters: {
        flatDiscountOnProduct: 19.99
      },
      offerType: 'PriceDropForProduct',
      isOfferForAll: false,
      discountName: 'Amazon'
    },
    {
      id: 4,
      products: [],
      offerParameters: {},
      offerType: 'PercentageDiscount',
      isOfferForAll: true,
      discountName: 'Default'
    },
    {
      id: 5,
      products: [
        {
          id: 2,
          name: 'Medium Pizza',
          description: "12'' Pizza for two persons",
          price: 15.99,
          url: 'https://i.ibb.co/BPM44QG/shourav-sheikh-a66s-Gf-Onnq-Q-unsplash.jpg'
        }
      ],
      offerParameters: {
        get: 5,
        pay: 4
      },
      offerType: 'BuyMorePayLess',
      isOfferForAll: false,
      discountName: 'Facebook'
    }
  ]
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
