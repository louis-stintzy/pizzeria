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

  const cardOrderStyle: React.CSSProperties = {
    width: '218px',
    padding: '0.5rem 1rem',
    backgroundColor: '#df0000',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    marginBottom: '0.5rem',
  };
  return (
    <button
      className="card-order"
      style={cardOrderStyle}
      onClick={handleOrderButton}
    >
      Commander
    </button>
  );
}

export default OrderButton;
