import { Article, ShoppingCart } from '../@types/article';
import useStore from '../store/store';

export const setQuantitySelectionModalisOpen = (isOpen: boolean) =>
  useStore.getState().setQuantitySelectionModalisOpen(isOpen);
export const setArticleToAdd = (article: Article | null) =>
  useStore.getState().setArticleToAdd(article);
export const setQuantityToAdd = (quantity: number) =>
  useStore.getState().setQuantityToAdd(quantity);
export const setShoppingCart = (shoppingCart: ShoppingCart) =>
  useStore.getState().setShoppingCart(shoppingCart);
