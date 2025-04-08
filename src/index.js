import * as cartService from "./services/cart.js"

import createItem from "./services/item.js";

const myCart = [];
const myWhishList = []

console.log("Welcome to the your Shopee Cart!")

const item1 = await createItem("Carrinho lego", 20.00, 2);

const item2 = await createItem("Carrinho playmobil", 5.00, 3)

await cartService.addItem(myCart, item1);
// await cartService.addItem(myWhishList, item2);
await cartService.addItem(myCart, item2);

// await cartService.deleteItem(myCart, item2.name)
// await cartService.removeItem(myCart, 2)

await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item1)

await cartService.displayCart(myCart)

await cartService.calcularTotal(myCart)

