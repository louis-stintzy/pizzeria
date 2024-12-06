interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
}

function CartItem({ name, price, quantity }: CartItemProps) {
  const cartItemStyle: React.CSSProperties = {
    color: '#666',
    display: 'flex',
    justifyContent: 'space-between',
    height: '25px',
    padding: '8px 0',
    margin: '5px 0',
  };
  return (
    <>
      <p className="cart-item" style={cartItemStyle}>
        <span>
          {name} x {quantity}{' '}
        </span>
        <span>{(price * quantity).toFixed(2)} €</span>
      </p>
    </>
  );
}

export default CartItem;
