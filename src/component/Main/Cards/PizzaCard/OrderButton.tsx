import { Article } from '../../../../@types/article';

interface OrderButtonProps {
  setQuantityModalIsOpen: (isOpen: boolean) => void;
  setArticleToAdd: (article: Article | null) => void;
  picture: string;
  name: string;
  price: number;
}

function OrderButton({
  picture,
  name,
  price,
  setQuantityModalIsOpen,
  setArticleToAdd,
}: OrderButtonProps) {
  const handleOrderButton = () => {
    setQuantityModalIsOpen(true);
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
