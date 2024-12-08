import PizzaCard from './PizzaCard/PizzaCard';
import pizzas from '../../../constants/pizzas';

function Cards() {
  return (
    <div
      id="pizzas-list"
      className="flex flex-wrap justify-start gap-8 max-w-7xl"
    >
      {pizzas.map((pizza) => (
        <PizzaCard
          key={pizza.id}
          id={pizza.id}
          name={pizza.name}
          picture={pizza.picture}
          toppings={pizza.toppings}
          price={pizza.price}
        />
      ))}
    </div>
  );
}

export default Cards;
