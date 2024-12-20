import { Article } from '../../../@types/article';
import CartItem from './CartItem';

interface CartItemsProps {
  articles: Article[];
}

function CartItems({ articles }: CartItemsProps) {
  return (
    <div id="cart-items-container">
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
