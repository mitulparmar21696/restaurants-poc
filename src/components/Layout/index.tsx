import React, { ReactNode, useEffect, useState } from 'react';
import './Layout.scss';
import { Layout, Badge, Menu, Dropdown } from 'antd';
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
  const cartMenu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">Empty Cart</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">View Cart</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="LayoutContainer">
      <Layout>
        <Header>
          <div className="logo">Pizzaria</div>
          <div className="cart">
            <Dropdown overlay={cartMenu} trigger={['click']}>
              <Badge count={orderCount} size="small">
                <ShoppingCartOutlined style={{ fontSize: '24px' }} />
              </Badge>
            </Dropdown>
          </div>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </div>
  );
};

export default MainLayout;
