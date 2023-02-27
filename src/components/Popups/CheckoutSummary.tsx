import { Modal, List } from 'antd';
import { CartItemType } from 'types/cart';
import useCheckout from 'hooks/useCheckout';
import { AppButton } from 'components/Base/AppButton';
interface PurchaseSummaryModalProps {
  visible: boolean;
  cart: CartItemType[];
  priceOfDay: number;
  name: string;
  onCancel: () => void;
}

const CheckoutModal = ({ visible, cart, onCancel, priceOfDay }: PurchaseSummaryModalProps) => {
  const { getPrice } = useCheckout();

  return (
    <>
      <Modal
        title={`Ummary for ${name}`}
        open={visible}
        footer={
          <AppButton type="default" onClick={onCancel}>
            Pay
          </AppButton>
        }>
        <div style={{ margin: '24px' }}>
          <List
            dataSource={cart}
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
        </div>

        <div>
          <div>Total Price: ${getPrice()}</div>
          <div>Discounted price: ${priceOfDay}</div>
        </div>
      </Modal>
    </>
  );
};

export default CheckoutModal;
