interface CartTotalProps {
  amount: number;
}

function CartTotal({ amount }: CartTotalProps) {
  return (
    <p
      id="cart-total"
      className="mt-4 flex justify-end text-xl font-bold text-red-600"
    >{`Total : ${amount.toFixed(2)} €`}</p>
  );
}

export default CartTotal;
