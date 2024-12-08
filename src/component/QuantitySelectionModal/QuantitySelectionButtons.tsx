import useStore from '../../store/store';
import IncrementButton from './IncrementButton';

function QuantitySelectionButtons() {
  const quantityToAdd = useStore((state) => state.quantityToAdd);
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
      <IncrementButton type="decrement" />
      <p>{quantityToAdd}</p>
      <IncrementButton type="increment" />
    </div>
  );
}

export default QuantitySelectionButtons;
