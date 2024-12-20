import CartTotal from './CartTotal';
import CartTitle from './CartTitle';
import CartItems from './CartItems';
import { useShoppingCart } from '../../../store/selectors';

function Cart() {
  const shoppingCart = useShoppingCart();
  return (
    <div
      id="cart-container"
      className="order-first mb-8 flex h-full w-72 flex-col justify-between rounded-md bg-white p-4 shadow-md md:sticky md:top-4 md:order-2 md:w-96"
      data-testid={`cart-container`}
    >
      <CartTitle />
      <CartItems articles={shoppingCart.articles} />
      <CartTotal amount={shoppingCart.total} />
    </div>
  );
}

export default Cart;
