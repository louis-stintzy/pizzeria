import { ShoppingCart } from '../../../@types/article';
import CartTotal from './CartTotal';
import CartTitle from './CartTitle';
import CartItems from './CartItems';

interface CartProps {
  shoppingCart: ShoppingCart;
}

function Cart({ shoppingCart }: CartProps) {
  const cartContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '300px',
    height: '100%',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    padding: '10px',
    zIndex: '1000',
  };
  return (
    <div className="cart-container" style={cartContainerStyle}>
      <CartTitle />
      <CartItems articles={shoppingCart.articles} />
      <CartTotal amount={shoppingCart.total} />
    </div>
  );
}

export default Cart;
