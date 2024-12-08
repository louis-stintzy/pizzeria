import useStore from '../../store/store';

interface IncrementButtonProps {
  type: 'increment' | 'decrement';
}

function IncrementButton({ type }: IncrementButtonProps) {
  const quantityToAdd = useStore((state) => state.quantityToAdd);
  const setQuantityToAdd = useStore((state) => state.setQuantityToAdd);
  const handleChangeQuantity = (type: 'increment' | 'decrement') => () => {
    const delta = type === 'increment' ? 1 : -1;
    setQuantityToAdd(quantityToAdd + delta);
  };

  const buttonStyle: React.CSSProperties = {
    width: '35px',
    height: '35px',
    color: 'white',
    borderRadius: '0.25rem',
    backgroundColor: '#df0000',
    border: 'none',
  };

  return (
    <button
      type="button"
      onClick={handleChangeQuantity(type)}
      style={buttonStyle}
    >
      {type === 'increment' ? '+' : '-'}
    </button>
  );
}

export default IncrementButton;
