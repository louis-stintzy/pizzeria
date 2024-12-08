import PizzaCard from './PizzaCard/PizzaCard';
import pizzas from '../../../constants/pizzas';
import { Pizza } from '../../../@types/pizza';

function Cards() {
  return (
    <div
      id="pizzas-list"
      className="flex flex-wrap justify-start gap-8 max-w-7xl"
    >
      {pizzas.map((pizza: Pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}

export default Cards;
