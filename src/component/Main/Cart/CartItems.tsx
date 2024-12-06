import { Article } from '../../../@types/article';
import CartItem from './CartItem';

interface CartItemsProps {
  articles: Article[];
}

function CartItems({ articles }: CartItemsProps) {
  const cartItemsContainerStyle: React.CSSProperties = {};
  return (
    <div className="cart-items-container" style={cartItemsContainerStyle}>
      {articles.map((article) => (
        <CartItem
          key={article.name}
          name={article.name}
          price={article.price}
          quantity={article.quantity}
        />
      ))}
    </div>
  );
}

export default CartItems;
