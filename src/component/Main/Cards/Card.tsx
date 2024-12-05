import { Article, ShoppingCart } from '../../../@types/article';

interface CardProps {
  id: number;
  name: string;
  picture: string;
  toppings: string;
  price: number;
  shoppingCart: ShoppingCart;
  setShoppingCart: (shoppingCart: ShoppingCart) => void;
  setQuantityModalIsOpen: (isOpen: boolean) => void;
  setArticleToAdd: (article: Article | null) => void;
}

function Card({
  id,
  name,
  picture,
  toppings,
  price,
  setQuantityModalIsOpen,
  setArticleToAdd,
}: CardProps) {
  const handleOrderButton = () => {
    setQuantityModalIsOpen(true);
    setArticleToAdd({ picture, name, price, quantity: 1 });
  };

  const cardContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    alignItems: 'center',
    padding: '1rem',
    margin: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  };

  const cardImgStyle: React.CSSProperties = {
    width: '200px',
    height: 'auto',
    borderRadius: '0.5rem',
  };

  const cardInfoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    width: '100%',
  };

  const cardInfoNameStyle: React.CSSProperties = {
    color: '#333',
    fontSize: '1.5rem',
  };

  const cardInfoToppingsStyle: React.CSSProperties = {
    color: '#333',
    fontSize: '1rem',
  };

  const cardInfoStylePrice: React.CSSProperties = {
    color: '#333',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const cardOrderStyle: React.CSSProperties = {
    padding: '0.5rem 1rem',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    marginTop: '1rem',
  };

  return (
    <div
      className="card-container"
      id={`pizzaId${id}`}
      style={cardContainerStyle}
    >
      <img src={picture} alt={name} className="card-img" style={cardImgStyle} />
      <div className="card-info" style={cardInfoStyle}>
        <h4 className="card-info__name" style={cardInfoNameStyle}>
          {name}
        </h4>
        <p className="card-info__toppings" style={cardInfoToppingsStyle}>
          {toppings}
        </p>
        <p className="card-info__price" style={cardInfoStylePrice}>
          {price} €
        </p>
        {/* <button className="card-order" style={cardOrderStyle} onClick={()=> handleOrderButton({name, quantity, price})}>Commander</button> */}
        <button
          className="card-order"
          style={cardOrderStyle}
          onClick={handleOrderButton}
        >
          Commander
        </button>
      </div>
    </div>
  );
}

export default Card;
