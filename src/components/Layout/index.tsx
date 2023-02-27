import React, { ReactNode } from 'react';
import './Layout.scss';
import { Layout, Badge, Menu, Dropdown } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;
type LayoutTpe = {
  children: ReactNode;
};

const MainLayout = ({ children }: LayoutTpe) => {
  // console.log('props', props);

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
              <Badge count={3} size="small">
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
