import { useQuantityToAdd } from '../../store/selectors';
import IncrementButton from './IncrementButton';

function QuantitySelectionButtons() {
  const quantityToAdd = useQuantityToAdd();

  return (
    <div
      id="modal__quantity-selection-buttons-container"
      className="mb-4 flex w-28 flex-row items-center justify-between"
    >
      <IncrementButton type="decrement" />
      <p
        id="modal__quantity-selection-buttons-quantity"
        data-testid="modal__quantity-selection-buttons-quantity"
        className="font-bold"
      >
        {quantityToAdd}
      </p>
      <IncrementButton type="increment" />
    </div>
  );
}

export default QuantitySelectionButtons;
