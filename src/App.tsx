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
  const itemName = Object.keys(pricingRules);

  return (
    <main className="App">
      <div className="header">
        <h2 className="header">Checkout System</h2>
        <p className=""> Your basket:</p>

        <div className="items">
          {itemName.map((item) => {
            // Get item details
            const product = pricingRules[item];

            // Get current quantity
            const quantity = basket[item] || 0;
            return (
              <div key={item} className="item-container">
                <div className="name-section">
                  <h3>Product {item}</h3>
                  <div className="prices">
                    <p> Price: £{(product.unitPrice / 100).toFixed(2)}</p>
                    {product.specialPrice && (
                      <p>
                        Buy {product.specialPrice.quantity} for £
                        {(product.specialPrice.price / 100).toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
                <div>
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
              </div>
            );
          })}
          <p className="total-price">
            Total: <span>£{(total / 100).toFixed(2)}</span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
