import CartTotal from './CartTotal';
import CartTitle from './CartTitle';
import CartItems from './CartItems';
import { useShoppingCart } from '../../../store/selectors';

function Cart() {
  const shoppingCart = useShoppingCart();
  const cartContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '300px',
    height: '100%',
    marginLeft: '2rem',
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
