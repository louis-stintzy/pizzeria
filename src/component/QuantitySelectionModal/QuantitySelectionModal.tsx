import Modal from './Modal';

import QuantitySelectionButtons from './QuantitySelectionButtons';
import {
  useArticleToAdd,
  useQuantitySelectionModalisOpen,
} from '../../store/selectors';
import AddToCartButton from './AddToCartButton';
import ModalPizzInfos from './ModalPizzInfos';
import CloseModalButton from './CloseModalButton';
import ModalPizzImg from './ModalPizzImg';

function QuantitySelectionModal() {
  const quantitySelectionModalisOpen = useQuantitySelectionModalisOpen();
  const articleToAdd = useArticleToAdd();

  if (!quantitySelectionModalisOpen || !articleToAdd) {
    return null;
  }

  return (
    <Modal className="flex flex-col items-center rounded-lg bg-white backdrop:bg-zinc-800/50">
      <CloseModalButton />
      <ModalPizzImg />
      <ModalPizzInfos />
      <QuantitySelectionButtons range={{ min: 1, max: 30 }} />
      <AddToCartButton />
    </Modal>
  );
}

export default QuantitySelectionModal;
