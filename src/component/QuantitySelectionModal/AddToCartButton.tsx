import addToCart from '../../utils/addToCart';
import {
  useArticleToAdd,
  useQuantityToAdd,
  useShoppingCart,
} from '../../store/selectors';
import { setShoppingCart } from '../../store/storeActions';
import handleModalClosing from '../../utils/handleModalClosing';

function AddToCartButton() {
  const articleToAdd = useArticleToAdd();
  const quantityToAdd = useQuantityToAdd();
  const shoppingCart = useShoppingCart();

  if (!articleToAdd) return null;

  const handleAddToCart = () => {
    articleToAdd.quantity = quantityToAdd;
    const updatedShoppingCart = addToCart(articleToAdd, shoppingCart);
    setShoppingCart(updatedShoppingCart);
    handleModalClosing();
  };

  return (
    <button
      type="button"
      id="modal__add-to-cart-button"
      data-testid="modal__add-to-cart-button"
      className="h-10 w-44 rounded bg-green-700 font-bold text-red-50"
      onClick={handleAddToCart}
    >
      Ajouter au panier
    </button>
  );
}

export default AddToCartButton;
