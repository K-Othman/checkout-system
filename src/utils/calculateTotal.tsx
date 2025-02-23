import { pricingRules } from "../data/pricingRules";

type Basket = {
  [key: string]: number;
};

export const calculateTotal = (basket: Basket) => {
  let total = 0;

  Object.entries(basket).forEach(([item, quantity]) => {
    const rule = pricingRules[item];

    if (rule.specialPrice && quantity >= rule.specialPrice.quantity) {
      console.log("will get the offer");
      const specialQuantity = rule.specialPrice.quantity;
      const specialPrice = rule.specialPrice.price;
      console.log(specialPrice, "specialQuantity");
      console.log(specialQuantity, "specialQuantity");
    } else {
      console.log("you will get the standerd price");
    }
  });
  return total;
};
