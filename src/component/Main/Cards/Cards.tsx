import PizzaCard from './PizzaCard/PizzaCard';
import pizzas from '../../../constants/pizzas';
import { Article, ShoppingCart } from '../../../@types/article';

interface CardsProps {
  shoppingCart: ShoppingCart;
  setShoppingCart: (shoppingCart: ShoppingCart) => void;
  setQuantityModalIsOpen: (isOpen: boolean) => void;
  setArticleToAdd: (article: Article | null) => void;
}

function Cards({
  shoppingCart,
  setShoppingCart,
  setQuantityModalIsOpen,
  setArticleToAdd,
}: CardsProps) {
  const pizzasListStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
  };
  return (
    <div className="pizzas-list" style={pizzasListStyle}>
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
          setQuantityModalIsOpen={setQuantityModalIsOpen}
          setArticleToAdd={setArticleToAdd}
        />
      ))}
    </div>
  );
}

export default Cards;
