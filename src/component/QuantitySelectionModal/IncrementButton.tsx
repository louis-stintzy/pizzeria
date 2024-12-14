import { useQuantityToAdd } from '../../store/selectors';
import { setQuantityToAdd } from '../../store/storeActions';
import PlusIcon from '../../icons/PlusIcon';
import MinusIcon from '../../icons/MinusIcon';

interface IncrementButtonProps {
  type: 'increment' | 'decrement';
  range: { min: number; max: number };
}

function IncrementButton({ type, range }: IncrementButtonProps) {
  const quantityToAdd = useQuantityToAdd();

  const handleChangeQuantity = (type: 'increment' | 'decrement') => () => {
    const delta = type === 'increment' ? 1 : -1;
    setQuantityToAdd(quantityToAdd + delta);
  };

  return (
    <button
      type="button"
      id={`modal__quantity-selection-buttons-${type}`}
      data-testid={`modal__quantity-selection-buttons-${type}`}
      className="flex h-8 w-8 select-none items-center justify-center rounded bg-red-600 text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-300"
      onClick={handleChangeQuantity(type)}
      disabled={
        (type === 'decrement' && quantityToAdd === range.min) ||
        (type === 'increment' && quantityToAdd === range.max)
      }
    >
      {type === 'increment' ? <PlusIcon /> : <MinusIcon />}
    </button>
  );
}

export default IncrementButton;
