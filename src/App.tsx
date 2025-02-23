import { useState } from "react";
import "./App.css";

import { pricingRules } from "./data/pricingRules";

import { calculateTotal } from "./utils/calculateTotal";
import Product from "./components/Products";

function App() {
  const [basket, setBasket] = useState<{ [key: string]: number }>({});
  const [total, setTotal] = useState<number>(0);

  // Adding items to the basket
  const addItem = (item: string) => {
    setBasket((prevBasket) => {
      const newBasket = { ...prevBasket, [item]: (prevBasket[item] || 0) + 1 };
      setTotal(calculateTotal(newBasket));
      return newBasket;
    });
  };

  // removing item with a counter
  const removeItem = (item: string) => {
    setBasket((prevBasket) => {
      if (!prevBasket[item]) return prevBasket;

      const newBasket = { ...prevBasket };
      newBasket[item]--;

      if (newBasket[item] === 0) {
        delete newBasket[item];
      }

      setTotal(calculateTotal(newBasket));
      return newBasket;
    });
  };

  // Getting the items' key
  const itemNames = Object.keys(pricingRules);

  return (
    <main className="App">
      <div className="header">
        <h2 className="header">Checkout System</h2>
        <p className=""> Your basket:</p>

        <div className="items">
          {itemNames.map((item) => (
            <Product
              key={item}
              item={item}
              product={pricingRules[item]}
              quantity={basket[item] || 0}
              addItem={addItem}
              removeItem={removeItem}
            />
          ))}
          <p className="total-price">
            Total: <span>£{(total / 100).toFixed(2)}</span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
