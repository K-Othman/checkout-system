import { useState } from "react";
import "./App.css";

function App() {
  const [basket, setBasket] = useState<{ [key: string]: number }>({});
  const [total, setTotal] = useState<number>(0);

  // Adding items to the basket
  const addItem = (item: string) => {
    setBasket((prevBasket) => {
      const newBasket = { ...prevBasket, [item]: (prevBasket[item] || 0) + 1 };
      console.log(newBasket);

      return newBasket;
    });
  };

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
        </div>
      </div>
    </main>
  );
}

export default App;
