import PizzaCard from './PizzaCard/PizzaCard';
import pizzas from '../../../constants/pizzas';
import { Pizza } from '../../../@types/pizza';

function Cards() {
  return (
    <div
      id="pizzas-list"
      className="flex max-w-7xl flex-wrap justify-start gap-8"
    >
      {pizzas.map((pizza: Pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}

export default Cards;
