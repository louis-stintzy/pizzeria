function CartTitle() {
  const CartTitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem',
  };
  return (
    <h3 className="cart-title" style={CartTitleStyle}>
      Votre panier
    </h3>
  );
}

export default CartTitle;
