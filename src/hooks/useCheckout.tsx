import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { CartItemType } from 'types/cart';

// ----------------------------------------------------------------------

export default function useCheckout() {
  const cart = useSelector((state: RootState) => state?.cartReducer);
  const getPrice = () => {
    const totalPrice: any = cart.cartDetails.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    return Number(totalPrice.toFixed(2));
  };
  // useEffect(() => {}, []);
  const calculateBuyMorePayLess = (offer: any) => {
    const productQuantity: CartItemType | undefined = cart.cartDetails.find(
      (e) => e.id === offer?.products[0]?.id
    );
    let discount = 0;
    if (productQuantity && productQuantity?.quantity >= offer?.offerParameters?.get) {
      const numberOfDiscountedItems = Math.floor(
        productQuantity?.quantity / offer?.offerParameters?.get
      );
      discount = numberOfDiscountedItems * productQuantity?.price * -1;
      const totalPrice = getPrice();
      const descountedAmmount = totalPrice + discount;
      return descountedAmmount;
    }
    const totalPrice = getPrice();
    return totalPrice;
  };
  const calculateDiscount = (type: string, userType: string) => {
    switch (type) {
      case 'FixedDiscount':
        {
          console.log('Here');
        }
        break;
      case 'BuyMorePayLess':
        {
          if (userType === 'Microsoft') {
            const offer = cart.Offers.find(
              (e) => e.discountName === 'Microsoft' && e.offerType === 'BuyMorePayLess'
            );
            if (offer) {
              return calculateBuyMorePayLess(offer);
            }
          } else if (userType === 'Facebook') {
            const offer = cart.Offers.find(
              (e) => e.discountName === 'Facebook' && e.offerType === 'BuyMorePayLess'
            );
            if (offer) {
              return calculateBuyMorePayLess(offer);
            }
          }
        }
        break;
      case 'PriceDropForProduct':
        {
          if (userType === 'Amazon') {
            const offer = cart.Offers.find(
              (e) => e.discountName === 'Amazon' && e.offerType === 'PriceDropForProduct'
            );
            const productQuantity: CartItemType | undefined = cart.cartDetails.find(
              (e) => e.id === offer?.products[0]?.id
            );

            if (productQuantity) {
              const discount = productQuantity.price - offer?.offerParameters.flatDiscountOnProduct;
              const flatTotalDiscount = productQuantity.quantity * discount;
              const totalPrice: any = getPrice();
              const finalPrice: any = totalPrice - flatTotalDiscount;
              return finalPrice;
            }
          }
        }
        break;
      case 'PercentageDiscount':
        {
          if (userType === 'Amazon') {
            console.log('Here');
          }
        }
        break;
      default:
        return getPrice();
        break;
    }
  };

  return { calculateDiscount, getPrice };
}
