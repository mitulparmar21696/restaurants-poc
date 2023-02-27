export type CartItemType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
export type PizzaType = {
  id: number;
  name: string;
  description: string;
  price: number;
  url: string;
};

export type Offers = {
  id: number;
  products: PizzaType[];
  offerType: string;
  offerParameters?: any;
  isOfferForAll?: boolean;
  discountName: string;
};
