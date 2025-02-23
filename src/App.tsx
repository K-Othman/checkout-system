import { useState } from "react";
import "./App.css";
import { calculateTotal } from "./utils/calculateTotal";
import { pricingRules } from "./data/pricingRules";

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
  // Gitting the [item : quantity] of basket
  const items = Object.entries(basket);

  // Getting the items' key
  const itemName = Object.keys(pricingRules);

  return (
    <main className="App">
      <div>
        <h2>Checkout System</h2>
        <p>Select items to add to your basket:</p>
        <div>
          {itemName.map((item) => (
            <button key={item} onClick={() => addItem(item)}>
              Add {item}
            </button>
          ))}
        </div>
        <div>
          <h3>Basket:</h3>
          <ul>
            {items.map(([item, quantity]) => (
              <li key={item}>
                {item} : {quantity}
              </li>
            ))}
          </ul>
        </div>
        <h3>Total: £{(total / 100).toFixed(2)}</h3>
      </div>
    </main>
  );
}

export default App;
