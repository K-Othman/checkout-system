import React from "react";
import { PricingRule } from "../data/pricingRules";

type ProductProps = {
  item: string;
  product: PricingRule;
  quantity: number;
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
};

const Product: React.FC<ProductProps> = ({
  item,
  product,
  quantity,
  addItem,
  removeItem,
}) => {
  return (
    <div className="item-container">
      <div className="name-section">
        <h3>Product {item}</h3>
        <div className="prices">
          <p>Price: £{(product.unitPrice / 100).toFixed(2)}</p>
          {product.specialPrice && (
            <p>
              Buy {product.specialPrice.quantity} for £
              {(product.specialPrice.price / 100).toFixed(2)}
            </p>
          )}
        </div>
      </div>
      {/* Counter Section */}
      <div className="counter">
        <button onClick={() => removeItem(item)} disabled={quantity === 0}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => addItem(item)}>+</button>
      </div>
    </div>
  );
};

export default Product;
