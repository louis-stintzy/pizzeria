import Cards from './Cards/Cards';
import Cart from './Cart/Cart';
import { ShoppingCart } from '../../@types/article';

interface MainProps {
  shoppingCart: ShoppingCart;
  // setArticleToAdd: (article: Article | null) => void;
  setShoppingCart: (shoppingCart: ShoppingCart) => void;
}

function Main({ shoppingCart, setShoppingCart }: MainProps) {
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
        // setArticleToAdd={setArticleToAdd}
      />
      <Cart shoppingCart={shoppingCart} />
    </div>
  );
}

export default Main;
