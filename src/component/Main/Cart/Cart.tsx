import Item from "./Item";
import { ShoppingCart } from "../../../@types/article";

interface CartProps {
  shoppingCart: ShoppingCart;
}

function Cart({shoppingCart}: CartProps) {
  const cartContainerStyle: React.CSSProperties = {
    width: '300px',
    height: '100%',
    backgroundColor: 'white',
    borderLeft: '1px solid black',
    padding: '10px',
    zIndex: '1000',
  };
  return (
    <div className="cart-container" style={cartContainerStyle}>
      <h3>Votre panier</h3>
      {shoppingCart.articles.map(article => 
        <Item key={article.name} name={article.name} price={article.price} quantity={article.quantity}/>
      )}
      <p>{`Total : ${shoppingCart.total}`}</p>
    </div>
  );
}

export default Cart;