import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type {} from '@redux-devtools/extension';
import { Article, ShoppingCart } from '../@types/article';

type State = {
  quantitySelectionModalisOpen: boolean;
  articleToAdd: Article | null;
  shoppingCart: ShoppingCart;
  setQuantitySelectionModalisOpen: (isOpen: boolean) => void;
  setArticleToAdd: (article: Article | null) => void;
  setShoppingCart: (shoppingCart: ShoppingCart) => void;
};

const useStore = create<State>()(
  devtools(
    (set) => ({
      quantitySelectionModalisOpen: false,
      articleToAdd: null,
      shoppingCart: { articles: [], total: 0 },
      setQuantitySelectionModalisOpen: (isOpen: boolean) =>
        set({ quantitySelectionModalisOpen: isOpen }),
      setArticleToAdd: (article: Article | null) =>
        set({ articleToAdd: article }),
      setShoppingCart: (shoppingCart: ShoppingCart) => set({ shoppingCart }),
    }),
    { name: 'shopping-cart-store' }
  )
);

export default useStore;
