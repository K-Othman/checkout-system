export type SpecialPrice = {
  quantity: number;
  price: number;
};

export type PricingRule = {
  unitPrice: number;
  specialPrice?: SpecialPrice;
};

export const pricingRules: { [key: string]: PricingRule } = {
  A: { unitPrice: 50, specialPrice: { quantity: 3, price: 130 } },
  B: { unitPrice: 30, specialPrice: { quantity: 2, price: 45 } },
  C: { unitPrice: 20 },
  D: { unitPrice: 15 },
};
