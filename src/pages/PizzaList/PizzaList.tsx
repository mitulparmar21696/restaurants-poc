import React, { useState } from 'react';
import { List, Card } from 'antd';
interface PizzaType {
  id: number;
  name: string;
  description: string;
  price: number;
}
const PizzaList = () => {
  const [selectedPizza, setSelectedPizza] = useState<PizzaType>();

  const pizzas = [
    {
      id: 1,
      name: 'Small Pizza',
      description: "10'' pizza for one person",
      price: 11.99
    },
    {
      id: 2,
      name: 'Medium Pizza',
      description: "12'' Pizza for two persons",
      price: 15.99
    },
    {
      id: 3,
      name: 'Large Pizza',
      description: "15'' Pizza for four persons",
      price: 21.99
    }
  ];

  const handleSelectPizza = (pizza: PizzaType) => {
    setSelectedPizza(pizza);
  };

  return (
    <div style={{ display: 'flex', margin: '0px 24px', overflow: 'hidden' }}>
      <div style={{ flex: 1, margin: '10px' }}>
        <List
          dataSource={pizzas}
          renderItem={(pizza: PizzaType) => (
            <List.Item onClick={() => handleSelectPizza(pizza)}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
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
            <p>{selectedPizza.description}</p>
            <p>Price: ${selectedPizza.price}</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PizzaList;
