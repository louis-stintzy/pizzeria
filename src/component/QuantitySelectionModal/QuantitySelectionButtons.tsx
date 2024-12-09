import { useQuantityToAdd } from '../../store/selectors';
import IncrementButton from './IncrementButton';

function QuantitySelectionButtons() {
  const quantityToAdd = useQuantityToAdd();

  return (
    <div
      id="modal__quantity-selection-buttons-container"
      className="flex flex-row justify-between items-center w-28 mb-4"
    >
      <IncrementButton type="decrement" />
      <p id="modal__quantity-selection-buttons-quantity" className="font-bold">
        {quantityToAdd}
      </p>
      <IncrementButton type="increment" />
    </div>
  );
}

export default QuantitySelectionButtons;
