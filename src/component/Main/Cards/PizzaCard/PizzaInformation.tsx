interface PizzaInformationProps {
  name: string;
  toppings: string;
  price: number;
}

function PizzaInformation({ name, toppings, price }: PizzaInformationProps) {
  const cardInfoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '1rem',
    width: '100%',
    height: '175px',
  };

  const cardInfoNameStyle: React.CSSProperties = {
    color: '#df0000',
    padding: '0rem 1rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const cardInfoToppingsStyle: React.CSSProperties = {
    color: '#666',
    padding: '0rem 1rem',
    fontSize: '1rem',
  };

  const cardInfoPriceStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    padding: '0rem 1rem',
    color: '#008815',
  };
  return (
    <div className="card-info" style={cardInfoStyle}>
      <h4 className="card-info__name" style={cardInfoNameStyle}>
        {name}
      </h4>
      <p className="card-info__toppings" style={cardInfoToppingsStyle}>
        {toppings}
      </p>
      <p className="card-info__price" style={cardInfoPriceStyle}>
        {price} €
      </p>
    </div>
  );
}

export default PizzaInformation;
