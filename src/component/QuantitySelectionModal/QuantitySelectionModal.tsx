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
    <Modal className="flex flex-col items-center rounded-lg bg-white px-8 pb-8 pt-4 backdrop:bg-zinc-800/50">
      <CloseModalButton />
      <ModalPizzImg />
      <ModalPizzInfos />
      <QuantitySelectionButtons />
      <AddToCartButton />
    </Modal>
  );
}

export default QuantitySelectionModal;
