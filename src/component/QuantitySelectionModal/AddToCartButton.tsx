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
      className="w-44 h-10 bg-green-700 text-red-50 rounded font-bold"
      onClick={handleAddToCart}
    >
      Ajouter au panier
    </button>
  );
}

export default AddToCartButton;
