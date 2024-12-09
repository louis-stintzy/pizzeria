import useStore from '../store/store';

export const useQuantitySelectionModalisOpen = () =>
  useStore((state) => state.quantitySelectionModalisOpen);
export const useArticleToAdd = () => useStore((state) => state.articleToAdd);
export const useQuantityToAdd = () => useStore((state) => state.quantityToAdd);
export const useShoppingCart = () => useStore((state) => state.shoppingCart);
