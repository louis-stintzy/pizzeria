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
      className="flex flex-col justify-between w-72 items-center rounded-md shadow-md bg-white overflow-hidden"
    >
      <PizzaPicture picture={picture} name={name} />
      <PizzaInformation name={name} toppings={toppings} price={price} />
      <OrderButton picture={picture} name={name} price={price} />
    </div>
  );
}

export default PizzaCard;
