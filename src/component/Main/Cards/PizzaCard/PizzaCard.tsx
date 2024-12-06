import { Article, ShoppingCart } from '../../../../@types/article';
import OrderButton from './OrderButton';
import PizzaInformation from './PizzaInformation';
import PizzaPicture from './PizzaPicture';

interface CardProps {
  id: number;
  name: string;
  picture: string;
  toppings: string;
  price: number;
  shoppingCart: ShoppingCart;
  setShoppingCart: (shoppingCart: ShoppingCart) => void;
  setQuantityModalIsOpen: (isOpen: boolean) => void;
  setArticleToAdd: (article: Article | null) => void;
}

function PizzaCard({
  id,
  name,
  picture,
  toppings,
  price,
  setQuantityModalIsOpen,
  setArticleToAdd,
}: CardProps) {
  const cardContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '282px',
    height: '455px',
    alignItems: 'center',
    borderRadius: '0.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    overflow: 'hidden',
  };

  return (
    <div
      className="card-container"
      id={`pizzaId${id}`}
      style={cardContainerStyle}
    >
      <PizzaPicture picture={picture} name={name} />
      <PizzaInformation name={name} toppings={toppings} price={price} />
      <OrderButton
        picture={picture}
        name={name}
        price={price}
        setQuantityModalIsOpen={setQuantityModalIsOpen}
        setArticleToAdd={setArticleToAdd}
      />
    </div>
  );
}

export default PizzaCard;
