import {
  setQuantitySelectionModalisOpen,
  setArticleToAdd,
} from '../../../../store/storeActions';

interface OrderButtonProps {
  id: number;
  picture: string;
  name: string;
  price: number;
}

function OrderButton({ id, picture, name, price }: OrderButtonProps) {
  const handleOrderButton = () => {
    setQuantitySelectionModalisOpen(true);
    setArticleToAdd({ picture, name, price, quantity: 1 });
  };

  return (
    <button
      id="card-order"
      data-testid={`order-button-pizzaId-${id}`}
      className="my-4 h-8 w-64 rounded-md border-none bg-red-600 text-red-50"
      onClick={handleOrderButton}
    >
      Commander
    </button>
  );
}

export default OrderButton;
