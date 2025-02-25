import PizzaCard from './PizzaCard/PizzaCard';
import pizzas from '../../../constants/pizzas';
import { Pizza } from '../../../@types/pizza';

function Cards() {
  return (
    <div
      id="pizzas-list"
      className="flex w-72 flex-col flex-wrap justify-start gap-8 md:w-full md:flex-row"
    >
      {pizzas.map((pizza: Pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}

export default Cards;
