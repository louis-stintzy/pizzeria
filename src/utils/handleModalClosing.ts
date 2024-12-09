import {
  setQuantitySelectionModalisOpen,
  setQuantityToAdd,
} from '../store/storeActions';

const handleModalClosing = () => {
  setQuantitySelectionModalisOpen(false);
  setQuantityToAdd(1);
};
export default handleModalClosing;
