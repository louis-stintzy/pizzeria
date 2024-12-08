import { ShoppingCart } from '../../../../@types/article';
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
  // setArticleToAdd: (article: Article | null) => void;
}

function PizzaCard({
  id,
  name,
  picture,
  toppings,
  price,
}: // setArticleToAdd,
CardProps) {
  return (
    <div
      id={`card-container-pizza-id${id}`}
      className="flex flex-col justify-between w-72 items-center rounded-md shadow-md bg-white overflow-hidden"
    >
      <PizzaPicture picture={picture} name={name} />
      <PizzaInformation name={name} toppings={toppings} price={price} />
      <OrderButton
        picture={picture}
        name={name}
        price={price}
        // setArticleToAdd={setArticleToAdd}
      />
    </div>
  );
}

export default PizzaCard;
