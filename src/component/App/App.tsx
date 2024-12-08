import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Header from '../Header/Header';
import { useState } from 'react';
import useStore from '../../store/store';
import QuantitySelectionModal from '../QuantitySelectionModal/QuantitySelectionModal';
import { Article, ShoppingCart } from '../../@types/article';

function App() {
  const [articleToAdd, setArticleToAdd] = useState<Article | null>(null);
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({
    articles: [],
    total: 0,
  });

  const quantitySelectionModalisOpen = useStore(
    (state) => state.quantitySelectionModalisOpen
  );
  return (
    <>
      <div
        id="app-container"
        className="flex flex-col bg-zinc-100 leading-relaxed font-sans"
      >
        <Header />
        <Main
          setArticleToAdd={setArticleToAdd}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
        <Footer />
        {quantitySelectionModalisOpen && (
          <QuantitySelectionModal
            isOpen={quantitySelectionModalisOpen}
            article={articleToAdd}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        )}
      </div>
    </>
  );
}

export default App;
