import useStore from '../../../../store/store';

interface OrderButtonProps {
  // setArticleToAdd: (article: Article | null) => void;
  picture: string;
  name: string;
  price: number;
}

function OrderButton({
  picture,
  name,
  price,
}: // setArticleToAdd,
OrderButtonProps) {
  const setQuantitySelectionModalisOpen = useStore(
    (state) => state.setQuantitySelectionModalisOpen
  );
  const setArticleToAdd = useStore((state) => state.setArticleToAdd);

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
