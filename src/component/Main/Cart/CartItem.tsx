interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
}

function CartItem({ name, price, quantity }: CartItemProps) {
  return (
    <>
      <p
        id="cart-item"
        className="my-1 flex h-6 justify-between py-2 text-zinc-800"
      >
        <span>
          {name} x {quantity}{' '}
        </span>
        <span>{(price * quantity).toFixed(2)} €</span>
      </p>
    </>
  );
}

export default CartItem;
