import Cards from './Cards/Cards';
import Cart from './Cart/Cart';

function Main() {
  return (
    <div
      id="main-container"
      className="m-8 flex flex-col items-center md:flex-row md:items-start md:gap-4"
    >
      <Cards />
      <Cart />
    </div>
  );
}

export default Main;
