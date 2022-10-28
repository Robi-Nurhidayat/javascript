// export module

console.log('Export module');
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });

  console.log(`product ${product} and quantity ${quantity} has been added`);
};
