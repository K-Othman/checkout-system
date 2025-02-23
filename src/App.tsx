import { useState } from "react";
import "./App.css";
import { calculateTotal } from "./utils/calculateTotal";

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
  console.log(items);

  return (
    <main className="App">
      <div>
        <h2>Checkout System</h2>
        <p>Select items to add to your basket:</p>
        <div>
          <button onClick={() => addItem("A")}>Add A</button>
          <button onClick={() => addItem("B")}>Add B</button>
          <button onClick={() => addItem("C")}>Add C</button>
          <button onClick={() => addItem("D")}>Add D</button>
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
        <h3>Total:</h3>
      </div>
    </main>
  );
}

export default App;
