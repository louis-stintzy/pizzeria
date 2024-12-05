import { useState } from 'react';
import { Article, ShoppingCart } from '../../@types/article';
import Modal from './Modal';
import addToCart from '../../utils/addToCart';
import QuantitySelectionButtons from './QuantitySelectionButtons';

interface QuantitySelectionModalProps {
  isOpen: boolean;
  article: Article | null;
  shoppingCart: ShoppingCart;
  setShoppingCart: (shoppingCart: ShoppingCart) => void;
  onClose: () => void;
}

function QuantitySelectionModal({
  isOpen,
  article,
  shoppingCart,
  setShoppingCart,
  onClose,
}: QuantitySelectionModalProps) {
  const [quantityToAdd, setQuantityToAdd] = useState<number>(1);
  const handleCancel = () => {
    onClose();
  };

  const handleAddToCart = () => {
    if (article) {
      article.quantity = quantityToAdd;
      const updatedShoppingCart = addToCart(article, shoppingCart);
      console.log(updatedShoppingCart);
      setShoppingCart(updatedShoppingCart);
      onClose();
    }
    onClose();
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
      isOpen={isOpen}
      onClose={onClose}
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
          src={article?.picture}
          alt={article?.name}
          className="modal-img-content"
          style={modalImgContentStyle}
        />
      </div>
      {article?.name}
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
