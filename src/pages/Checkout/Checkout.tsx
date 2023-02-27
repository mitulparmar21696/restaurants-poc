import { Form, Input, List, Row, Col, Card, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CartItemType } from 'types/cart';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import useCheckout from 'hooks/useCheckout';
import CheckoutModal from 'components/Popups/CheckoutSummary';
import { useState } from 'react';
import { AppButton } from 'components/Base/AppButton';
const CheckoutScreen = () => {
  const [visibleCheckoutModal, setVisibleCheckoutModal] = useState<boolean>(false);
  const [priceOfDay, setPriceOfDay] = useState<any>(0);
  const [name, setName] = useState<string>('');
  const { calculateDiscount } = useCheckout();
  const cart = useSelector((state: RootState) => state?.cartReducer);
  const onFinish = (values: any) => {
    if (calculateDiscount) {
      const finalPrice = calculateDiscount(values.couponType, values.typeOfUser);
      if (finalPrice) {
        setName(values.firstName);
        setPriceOfDay(finalPrice);
        setVisibleCheckoutModal(true);
      }
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Card title="Checkout">
            <Form name="checkout" onFinish={onFinish}>
              <Form.Item
                name="firstName"
                rules={[{ required: true, message: 'Please input your first name!' }]}>
                <Input prefix={<UserOutlined />} placeholder="First Name" />
              </Form.Item>

              <Form.Item name="couponType">
                <Select placeholder="Type of coupon">
                  <Select.Option value="FixedDiscount" disabled>
                    FixedDiscount (No offers there)
                  </Select.Option>
                  <Select.Option value="BuyMorePayLess">
                    BuyMorePayLess ({' '}
                    {cart.Offers.map((e) =>
                      e.offerType === 'BuyMorePayLess' ? e.discountName : ''
                    ).join(' ')}
                    )
                  </Select.Option>
                  <Select.Option value="PriceDropForProduct">
                    PriceDropForProduct ({' '}
                    {cart.Offers.map((e) =>
                      e.offerType === 'PriceDropForProduct' ? e.discountName : ''
                    ).join(' ')}
                    )
                  </Select.Option>
                  <Select.Option value="PercentageDiscount" disabled>
                    PercentageDiscount (No offers there)
                  </Select.Option>
                </Select>
              </Form.Item>

              <Form.Item name="typeOfUser">
                <Select placeholder="type of user">
                  <Select.Option value="Default">Default</Select.Option>
                  <Select.Option value="Amazon">Amazon</Select.Option>
                  <Select.Option value="Microsoft">Microsoft</Select.Option>
                  <Select.Option value="Facebook">Facebook</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <AppButton type="default" htmlType="submit">
                  Checkout
                </AppButton>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Order Summary">
            <p className="error-message">* Final amount will be visible on checkout click.</p>
            <List
              dataSource={cart.cartDetails}
              renderItem={(pizza: CartItemType) => (
                <List.Item>
                  <div className="pizzaDetails">
                    <div>{pizza.name} </div>
                    <div>Quantity: {pizza.quantity}</div>
                    <div>${pizza.price}</div>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
      <CheckoutModal
        visible={visibleCheckoutModal}
        onCancel={() => {
          setVisibleCheckoutModal(false);
        }}
        cart={cart.cartDetails}
        priceOfDay={priceOfDay}
        name={name}
      />
    </div>
  );
};

export default CheckoutScreen;
