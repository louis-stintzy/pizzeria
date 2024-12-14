import { useQuantityToAdd } from '../../store/selectors';
import IncrementButton from './IncrementButton';

interface QuantitySelectionButtonsProps {
  range: { min: number; max: number };
}

function QuantitySelectionButtons({ range }: QuantitySelectionButtonsProps) {
  const quantityToAdd = useQuantityToAdd();

  return (
    <div
      id="modal__quantity-selection-buttons-container"
      className="mb-4 flex w-28 flex-row items-center justify-between"
    >
      <IncrementButton type="decrement" range={range} />
      <p
        id="modal__quantity-selection-buttons-quantity"
        data-testid="modal__quantity-selection-buttons-quantity"
        className="font-bold"
      >
        {quantityToAdd}
      </p>
      <IncrementButton type="increment" range={range} />
    </div>
  );
}

export default QuantitySelectionButtons;
