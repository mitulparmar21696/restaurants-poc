import React, { ReactNode, useEffect, useState } from 'react';
import './Layout.scss';
import { useNavigate } from 'react-router-dom';
import { Layout, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { CartItemType } from 'types/cart';
import { setCartDetails } from 'store/Actions/cart';
import { RootState } from '../../store';

const { Header, Content } = Layout;
type LayoutTpe = {
  children: ReactNode;
};

const MainLayout = ({ children }: LayoutTpe) => {
  const [orderCount, setOrderCount] = useState<number>(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state?.cartReducer);
  useEffect(() => {
    const cart: string | null = localStorage.getItem('cart');
    if (cart) {
      const cartItems: CartItemType[] = JSON.parse(cart);

      dispatch(setCartDetails(cartItems));
    }
  }, []);

  useEffect(() => {
    let quantity = 0;
    cart.cartDetails.forEach((e) => {
      quantity = quantity + e.quantity;
    });
    setOrderCount(quantity);
  }, [cart.cartDetails]);

  return (
    <div className="LayoutContainer">
      <Layout>
        <Header>
          <div
            className="logo"
            style={{
              cursor: 'pointer'
            }}
            onClick={() => {
              navigate('/dashboard');
            }}>
            Pizzaria
          </div>
          <div
            className="cart"
            onClick={() => {
              navigate('/checkout');
            }}>
            <Badge count={orderCount} size="small">
              <ShoppingCartOutlined style={{ fontSize: '24px' }} />
            </Badge>
          </div>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </div>
  );
};

export default MainLayout;
