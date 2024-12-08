import useStore from '../../store/store';
import Modal from './Modal';
import addToCart from '../../utils/addToCart';
import QuantitySelectionButtons from './QuantitySelectionButtons';

function QuantitySelectionModal() {
  const quantitySelectionModalisOpen = useStore(
    (state) => state.quantitySelectionModalisOpen
  );
  const articleToAdd = useStore((state) => state.articleToAdd);
  const quantityToAdd = useStore((state) => state.quantityToAdd);
  const shoppingCart = useStore((state) => state.shoppingCart);
  const setQuantitySelectionModalisOpen = useStore(
    (state) => state.setQuantitySelectionModalisOpen
  );
  const setQuantityToAdd = useStore((state) => state.setQuantityToAdd);
  const setShoppingCart = useStore((state) => state.setShoppingCart);

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
