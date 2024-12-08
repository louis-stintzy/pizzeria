import Cards from './Cards/Cards';
import Cart from './Cart/Cart';

function Main() {
  const mainContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    margin: '2rem',
  };
  return (
    <div className="main-container" style={mainContainerStyle}>
      <Cards />
      <Cart />
    </div>
  );
}

export default Main;
