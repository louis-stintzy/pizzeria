import { useState } from 'react';
import useStore from '../../store/store';
import Modal from './Modal';
import addToCart from '../../utils/addToCart';
import QuantitySelectionButtons from './QuantitySelectionButtons';

function QuantitySelectionModal() {
  const [quantityToAdd, setQuantityToAdd] = useState<number>(1);

  const articleToAdd = useStore((state) => state.articleToAdd);
  const shoppingCart = useStore((state) => state.shoppingCart);
  const setQuantitySelectionModalisOpen = useStore(
    (state) => state.setQuantitySelectionModalisOpen
  );
  const setShoppingCart = useStore((state) => state.setShoppingCart);

  const handleCancel = () => {
    setQuantitySelectionModalisOpen(false);
  };
  const handleAddToCart = () => {
    if (articleToAdd) {
      articleToAdd.quantity = quantityToAdd;
      const updatedShoppingCart = addToCart(articleToAdd, shoppingCart);
      console.log(updatedShoppingCart);
      setShoppingCart(updatedShoppingCart);
      setQuantitySelectionModalisOpen(false);
    }
    setQuantitySelectionModalisOpen(false);
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
      <button type="button" onClick={handleCancel}>
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
      <QuantitySelectionButtons
        quantityToAdd={quantityToAdd}
        setQuantityToAdd={setQuantityToAdd}
      />
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
