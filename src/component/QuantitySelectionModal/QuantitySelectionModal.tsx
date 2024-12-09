import Modal from './Modal';

import QuantitySelectionButtons from './QuantitySelectionButtons';
import {
  useArticleToAdd,
  useQuantitySelectionModalisOpen,
} from '../../store/selectors';
import {
  setQuantitySelectionModalisOpen,
  setQuantityToAdd,
} from '../../store/storeActions';
import AddToCartButton from './AddToCartButton';
import ModalPizzInfos from './ModalPizzInfos';

function QuantitySelectionModal() {
  const quantitySelectionModalisOpen = useQuantitySelectionModalisOpen();
  const articleToAdd = useArticleToAdd();

  const handleModalClosing = () => {
    setQuantitySelectionModalisOpen(false);
    setQuantityToAdd(1);
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

  if (!quantitySelectionModalisOpen || !articleToAdd) {
    return null;
  }

  return (
    <Modal className="bg-white rounded-lg p-8 flex flex-col items-center">
      <button type="button" onClick={handleModalClosing}>
        Cancel
      </button>

      <div id="modal__img-container" style={modalImgContainerStyle}>
        <img
          src={articleToAdd?.picture}
          alt={articleToAdd?.name}
          className="modal-img-content"
          style={modalImgContentStyle}
        />
      </div>

      <ModalPizzInfos />
      <QuantitySelectionButtons />
      <AddToCartButton />
    </Modal>
  );
}

export default QuantitySelectionModal;
