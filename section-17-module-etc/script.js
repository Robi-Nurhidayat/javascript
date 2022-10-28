// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// console.log('import module');

// addToCart('Bread', 100);

// console.log(totalPrice);
// console.log(totalQuantity);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 2000);

import add, { cart } from './shoppingCart.js';

add('Roti', 2000);
add('Ayam', 2000);
add('daging', 2000);

console.log(cart);
