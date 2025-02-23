import { pricingRules } from "../data/pricingRules";

type Basket = {
  [key: string]: number;
};

// Loop through each item in the basket
export const calculateTotal = (basket: Basket) => {
  let total = 0;

  Object.entries(basket).forEach(([item, quantity]) => {
    // Get the pricing details for the item
    const rule = pricingRules[item];

    if (rule.specialPrice && quantity >= rule.specialPrice.quantity) {
      const specialQuantity = rule.specialPrice.quantity;
      const specialPrice = rule.specialPrice.price;

      const numOfDeals = Math.floor(quantity / specialQuantity);
      const remaining = quantity % specialQuantity;

      // Add the price of special price deals and the remaining items at unit price
      total += numOfDeals * specialPrice + remaining * rule.unitPrice;
    } else {
      total += quantity * rule.unitPrice;
    }
  });
  return total;
};
