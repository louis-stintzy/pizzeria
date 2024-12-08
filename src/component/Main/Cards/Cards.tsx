import PizzaCard from './PizzaCard/PizzaCard';
import pizzas from '../../../constants/pizzas';
import { Article, ShoppingCart } from '../../../@types/article';

interface CardsProps {
  shoppingCart: ShoppingCart;
  setShoppingCart: (shoppingCart: ShoppingCart) => void;
  setArticleToAdd: (article: Article | null) => void;
}

function Cards({ shoppingCart, setShoppingCart, setArticleToAdd }: CardsProps) {
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
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          setArticleToAdd={setArticleToAdd}
        />
      ))}
    </div>
  );
}

export default Cards;
