import IncrementButton from './IncrementButton';

interface QuantitySelectionButtonsProps {
  quantityToAdd: number;
  setQuantityToAdd: (quantity: number) => void;
}

function QuantitySelectionButtons({
  quantityToAdd,
  setQuantityToAdd,
}: QuantitySelectionButtonsProps) {
  const quantitySelectionButtonsContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100px',
    margin: '1rem auto',
  };

  return (
    <div
      className="quantity-selection-buttons-container"
      style={quantitySelectionButtonsContainerStyle}
    >
      <IncrementButton
        type="decrement"
        quantityToAdd={quantityToAdd}
        setQuantityToAdd={setQuantityToAdd}
      />
      <p>{quantityToAdd}</p>
      <IncrementButton
        type="increment"
        quantityToAdd={quantityToAdd}
        setQuantityToAdd={setQuantityToAdd}
      />
    </div>
  );
}

export default QuantitySelectionButtons;
