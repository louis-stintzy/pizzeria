import { Pizza } from '../../../../@types/pizza';
import OrderButton from './OrderButton';
import PizzaInformation from './PizzaInformation';
import PizzaPicture from './PizzaPicture';

interface CardProps {
  pizza: Pizza;
}

function PizzaCard({ pizza }: CardProps) {
  const { id, name, picture, toppings, price } = pizza;
  return (
    <div
      id={`card-container-pizza-id${id}`}
      className="flex w-72 flex-col items-center justify-between overflow-hidden rounded-md bg-white shadow-md"
    >
      <PizzaPicture picture={picture} name={name} />
      <PizzaInformation name={name} toppings={toppings} price={price} />
      <OrderButton id={id} picture={picture} name={name} price={price} />
    </div>
  );
}

export default PizzaCard;
