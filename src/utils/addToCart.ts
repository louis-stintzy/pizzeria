import { Article, ShoppingCart } from '../@types/article';

const addToCart = (
  articleToAdd: Article | null,
  currentShoppingCart: ShoppingCart
) => {
  if (!articleToAdd) {
    return currentShoppingCart;
  }
  const updatedShoppingCart = { ...currentShoppingCart };
  const itemsInCart = updatedShoppingCart.articles;
  const itemAlreadyInCart = itemsInCart.find(
    (item) => item.name === articleToAdd.name
  );
  if (itemAlreadyInCart) {
    itemAlreadyInCart.quantity += articleToAdd.quantity;
    updatedShoppingCart.total += articleToAdd.price * articleToAdd.quantity;
    updatedShoppingCart.total =
      Math.round(updatedShoppingCart.total * 100) / 100;
    return updatedShoppingCart;
  }
  itemsInCart.push(articleToAdd);
  updatedShoppingCart.total += articleToAdd.price * articleToAdd.quantity;
  updatedShoppingCart.total = Math.round(updatedShoppingCart.total * 100) / 100;
  return updatedShoppingCart;
};

// const addToCart = (name, price, quantity) => {
//   const articles = shoppingCart.articles;
//   const itemAlreadyInCart = articles.find((article) => article.name === name);
//   console.log(itemAlreadyInCart);
//   if (itemAlreadyInCart) {
//     itemAlreadyInCart.quantity += quantity;
//     let total = shoppingCart.total + price * quantity;
//     total = Math.round(total * 100) / 100;
//     setShoppingCart({ articles: articles, total: total });
//     return;
//   }
//   articles.push({ name: name, price: price, quantity: quantity });
//   let total = shoppingCart.total;
//   const amoutToAdd = price * quantity;
//   total += amoutToAdd;
//   total = Math.round(total * 100) / 100;
//   setShoppingCart({ articles: articles, total: total });
// };

export default addToCart;
