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

export default addToCart;
