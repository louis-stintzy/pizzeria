interface ItemProps {
    name: string;
    price: number;
    quantity: number;
}

function Item({name, price, quantity}: ItemProps) {
  return (
    <>
      <p>{name} x {quantity} - {price * quantity} €</p>
    </>
  );
}

export default Item;