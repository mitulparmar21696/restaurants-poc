import React, { useState } from 'react';
import './PizzaList.scss';
import { List, Card } from 'antd';
interface PizzaType {
  id: number;
  name: string;
  description: string;
  price: number;
  url: string;
}
const PizzaList = () => {
  const [selectedPizza, setSelectedPizza] = useState<PizzaType>();

  const pizzas = [
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
  ];

  const handleSelectPizza = (pizza: PizzaType) => {
    setSelectedPizza(pizza);
  };

  return (
    <div className="pizzaContainer">
      <div style={{ flex: 1, margin: '10px' }}>
        <List
          dataSource={pizzas}
          renderItem={(pizza: PizzaType) => (
            <List.Item>
              <div>
                <img width={50} height={50} src={pizza.url} />
              </div>
              <div className="pizzaDetails" onClick={() => handleSelectPizza(pizza)}>
                <div>{pizza.name}</div>
                <div>{pizza.description}</div>
              </div>
            </List.Item>
          )}
        />
      </div>
      <div style={{ flex: 1, margin: '10px' }}>
        {selectedPizza && (
          <Card title={selectedPizza.name} style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div>
                <p>{selectedPizza.description}</p>
                <p>Price: ${selectedPizza.price}</p>
              </div>
              <div>
                <img src={selectedPizza.url} width={50} height={50} />
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PizzaList;
