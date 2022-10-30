// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// console.log('import module');

// addToCart('Bread', 100);

// console.log(totalPrice);
// console.log(totalQuantity);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 2000);

// import add, { cart } from './shoppingCart.js';

// add('Roti', 2000);
// add('Ayam', 2000);
// add('daging', 2000);

// console.log(cart);

// const getJsonPlaceholder = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// getJsonPlaceholder();

// const getLastPost = await getJsonPlaceholder();

// console.log(getLastPost);

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 25;

  const addToCart = (product, qty) => {
    cart.push({ product, qty });
    console.log(`${qty} ${product} added to cart`);
  };

  const orderStock = (product, qty) => {
    cart.push({ product, qty });
    console.log(`${qty} ${product} order from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

console.log(shoppingCart2.addToCart('roti', 22));
