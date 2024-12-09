import { useQuantityToAdd } from '../../store/selectors';
import { setQuantityToAdd } from '../../store/storeActions';

interface IncrementButtonProps {
  type: 'increment' | 'decrement';
}

function IncrementButton({ type }: IncrementButtonProps) {
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
      className="h-8 w-8 bg-red-600 text-red-50 rounded "
      onClick={handleChangeQuantity(type)}
    >
      {type === 'increment' ? '+' : '-'}
    </button>
  );
}

export default IncrementButton;
