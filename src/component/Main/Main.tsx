import Cards from './Cards/Cards';
import Cart from './Cart/Cart';
import { Article, ShoppingCart } from '../../@types/article';

interface MainProps {
  shoppingCart: ShoppingCart;
  setQuantityModalIsOpen: (isOpen: boolean) => void;
  setArticleToAdd: (article: Article | null) => void;
  setShoppingCart: (shoppingCart: ShoppingCart) => void;
}

function Main({
  shoppingCart,
  setQuantityModalIsOpen,
  setArticleToAdd,
  setShoppingCart,
}: MainProps) {
  const mainContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    margin: '2rem',
  };
  return (
    <div className="main-container" style={mainContainerStyle}>
      <Cards
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        setQuantityModalIsOpen={setQuantityModalIsOpen}
        setArticleToAdd={setArticleToAdd}
      />
      <Cart shoppingCart={shoppingCart} />
    </div>
  );
}

export default Main;
