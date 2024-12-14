interface PizzaInformationProps {
  name: string;
  toppings: string;
  price: number;
}

function PizzaInformation({ name, toppings, price }: PizzaInformationProps) {
  return (
    <div
      id="card-info"
      className="flex h-44 w-full flex-col justify-between p-4"
    >
      <h4 id="card-info__name" className="px-4 text-2xl font-bold text-red-600">
        {name}
      </h4>
      <p id="card-info__toppings" className="px-4 text-base text-zinc-600">
        {toppings}
      </p>
      <p
        id="card-info__price"
        className="px-4 text-2xl font-bold text-green-700"
      >
        {price.toFixed(2)} €
      </p>
    </div>
  );
}

export default PizzaInformation;
