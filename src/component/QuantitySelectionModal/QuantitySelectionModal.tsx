import Modal from './Modal';
import addToCart from '../../utils/addToCart';
import QuantitySelectionButtons from './QuantitySelectionButtons';
import {
  useArticleToAdd,
  useQuantitySelectionModalisOpen,
  useQuantityToAdd,
  useShoppingCart,
} from '../../store/selectors';
import {
  setQuantitySelectionModalisOpen,
  setQuantityToAdd,
  setShoppingCart,
} from '../../store/storeActions';

function QuantitySelectionModal() {
  const quantitySelectionModalisOpen = useQuantitySelectionModalisOpen();
  const articleToAdd = useArticleToAdd();
  const quantityToAdd = useQuantityToAdd();
  const shoppingCart = useShoppingCart();

  const handleCloseOrCancel = () => {
    setQuantitySelectionModalisOpen(false);
    setQuantityToAdd(1);
  };
  const handleAddToCart = () => {
    if (articleToAdd) {
      articleToAdd.quantity = quantityToAdd;
      const updatedShoppingCart = addToCart(articleToAdd, shoppingCart);
      setShoppingCart(updatedShoppingCart);
      handleCloseOrCancel();
    }
    handleCloseOrCancel();
  };

  const modalImgContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '268px',
    height: '200px',
    borderRadius: '0.5rem',
    overflow: 'hidden',
  };

  const modalImgContentStyle: React.CSSProperties = {
    overflow: 'hidden',
  };

  const modalAddToCartButtonStyle: React.CSSProperties = {
    width: '150px',
    height: '40px',
    backgroundColor: '#008815',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
  };

  if (!quantitySelectionModalisOpen) {
    return null;
  }

  return (
    <Modal
      modalStyle={{
        width: '350px',
        height: '450px',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button type="button" onClick={handleCloseOrCancel}>
        Cancel
      </button>
      <div className="modal-img-container" style={modalImgContainerStyle}>
        <img
          src={articleToAdd?.picture}
          alt={articleToAdd?.name}
          className="modal-img-content"
          style={modalImgContentStyle}
        />
      </div>
      {articleToAdd?.name}
      <QuantitySelectionButtons />
      <button
        type="button"
        className="modal-add-to-cart-button"
        style={modalAddToCartButtonStyle}
        onClick={handleAddToCart}
      >
        Ajouter au panier
      </button>
    </Modal>
  );
}

export default QuantitySelectionModal;
