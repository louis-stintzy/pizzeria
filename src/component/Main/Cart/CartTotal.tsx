interface CartTotalProps {
  amount: number;
}

function CartTotal({ amount }: CartTotalProps) {
  const cartTotalStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#df0000',
    marginTop: '1rem',
  };
  return (
    <p className="cart-total" style={cartTotalStyle}>{`Total : ${amount.toFixed(
      2
    )}`}</p>
  );
}

export default CartTotal;
