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

  // my remove item with a counter
  const removeItem = (item: string) => {
    setBasket((prevBasket) => {
      if (!prevBasket[item]) return prevBasket; // If item isn't in the basket, do nothing

      const newBasket = { ...prevBasket };
      newBasket[item]--;

      if (newBasket[item] === 0) {
        delete newBasket[item]; // Remove item if count reaches 0
      }

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

        <div className="items">
          {itemName.map((item) => {
            const product = pricingRules[item]; // Get item details
            const quantity = basket[item] || 0; // Get current quantity

            return (
              <div key={item} className="item-container">
                <h3>{item}</h3>
                <p>Price: £{(product.unitPrice / 100).toFixed(2)}</p>

                {product.specialPrice && (
                  <p>
                    Buy {product.specialPrice.quantity} for £
                    {(product.specialPrice.price / 100).toFixed(2)}
                  </p>
                )}

                {/* Counter Section */}
                <div className="counter">
                  <button
                    onClick={() => removeItem(item)}
                    disabled={quantity === 0}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => addItem(item)}>+</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
