import React, { useEffect, useState } from 'react';
import './PizzaList.scss';
import { List, Card } from 'antd';
import { RootState } from 'store';
import { useNavigate } from 'react-router-dom';
import { CartItemType, PizzaType } from 'types/cart';
import { useDispatch, useSelector } from 'react-redux';
import { setCartDetails } from 'store/Actions/cart';
import { AppButton } from 'components/Base/AppButton';

const PizzaList = () => {
  const [selectedPizza, setSelectedPizza] = useState<PizzaType>();
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [orderCount, setOrderCount] = useState<number>(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state?.cartReducer);

  useEffect(() => {
    const localCart: string | null = localStorage.getItem('cart');
    if (localCart) {
      const cartItems: CartItemType[] = JSON.parse(localCart);
      setCartItems(cartItems);
      dispatch(setCartDetails(cartItems));
    }
  }, []);

  useEffect(() => {
    let quantity = 0;

    cart.cartDetails.forEach((e: CartItemType) => {
      quantity = quantity + e.quantity;
    });
    setOrderCount(quantity);
    const amount = getPrice();
    setPrice(amount);
  }, [cart.cartDetails, cartItems]);

  const handleAddToCart = (item: PizzaType) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const cart = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(cart);
      dispatch(setCartDetails(cart));
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      const cart = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(cart);
      dispatch(setCartDetails(cart));
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  const handleRemoveFromCart = (item: PizzaType) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem && existingItem.quantity > 1) {
      const cart = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
      setCartItems(cart);
      dispatch(setCartDetails(cart));

      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      const cart = cartItems.filter((cartItem) => cartItem.id !== item.id);
      setCartItems(cart);
      dispatch(setCartDetails(cart));
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  const handleSelectPizza = (pizza: PizzaType) => {
    setSelectedPizza(pizza);
  };

  const getPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    return totalPrice;
  };

  return (
    <div>
      <div className="pizzaContainer">
        <div style={{ flex: 2, margin: '10px' }}>
          <List
            dataSource={cart.pizzaList}
            renderItem={(pizza: PizzaType) => (
              <List.Item>
                <div>
                  <img
                    width={50}
                    height={50}
                    src={pizza.url}
                    onClick={() => handleSelectPizza(pizza)}
                  />
                </div>
                <div className="pizzaDetails" onClick={() => handleSelectPizza(pizza)}>
                  <div>{pizza.name}</div>
                  <div className="pizzaDescription">{pizza.description}</div>
                  <div>${pizza.price}</div>
                </div>
                <div className="QuantityButton">
                  <div
                    className="ButtonFilled"
                    onClick={() => {
                      handleAddToCart(pizza);
                      handleSelectPizza(pizza);
                    }}>
                    +
                  </div>
                  {cartItems?.find((e) => e.id === pizza.id) && (
                    <div className="Button">
                      {cartItems.find((e) => e.id === pizza.id)?.quantity}
                    </div>
                  )}
                  <div
                    className="ButtonFilled"
                    onClick={() => {
                      handleRemoveFromCart(pizza);
                      handleSelectPizza(pizza);
                    }}>
                    -
                  </div>
                </div>
              </List.Item>
            )}
          />
        </div>
        <div style={{ flex: 2, margin: '10px' }}>
          {selectedPizza && (
            <Card title={selectedPizza.name} style={{ width: '100%' }}>
              <div
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                  <p>{selectedPizza.description}</p>
                  <p>Price: ${selectedPizza.price}</p>
                </div>
                <div>
                  <img src={selectedPizza.url} width={50} height={50} />
                </div>
              </div>
              <div className="QuantityButton">
                <div
                  className="ButtonFilled"
                  onClick={() => {
                    handleAddToCart(selectedPizza);
                  }}>
                  +
                </div>
                {cartItems?.find((e) => e.id === selectedPizza.id) && (
                  <div className="Button">
                    {cartItems.find((e) => e.id === selectedPizza.id)?.quantity}
                  </div>
                )}
                <div
                  className="ButtonFilled"
                  onClick={() => {
                    handleRemoveFromCart(selectedPizza);
                  }}>
                  -
                </div>
              </div>
            </Card>
          )}
        </div>
        <div style={{ flex: 1, margin: '10px' }}>
          <Card title={`Quantity: ${orderCount}`} style={{ width: 200 }}>
            <p>Price: ${price.toFixed(2)}</p>
            <AppButton
              type="default"
              onClick={() => {
                navigate('/checkout');
              }}>
              Review and Pay
            </AppButton>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PizzaList;
