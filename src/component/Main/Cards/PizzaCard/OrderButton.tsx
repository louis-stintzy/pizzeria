import {
  setQuantitySelectionModalisOpen,
  setArticleToAdd,
} from '../../../../store/storeActions';

interface OrderButtonProps {
  picture: string;
  name: string;
  price: number;
}

function OrderButton({ picture, name, price }: OrderButtonProps) {
  const handleOrderButton = () => {
    setQuantitySelectionModalisOpen(true);
    setArticleToAdd({ picture, name, price, quantity: 1 });
  };

  return (
    <button
      id="card-order"
      className="w-64 bg-red-600 text-red-50 border-none rounded-md my-4 h-8"
      onClick={handleOrderButton}
    >
      Commander
    </button>
  );
}

export default OrderButton;
