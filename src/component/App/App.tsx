import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Header from '../Header/Header';
import { useState } from 'react';
import QuantitySelectionModal from '../QuantitySelectionModal/QuantitySelectionModal';
import { Article, ShoppingCart } from '../../@types/article';

function App() {
  const [quantitySelectionModalisOpen, setQuantitySelectionModalisOpen] =
    useState(false);
  const [articleToAdd, setArticleToAdd] = useState<Article | null>(null);
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({
    articles: [],
    total: 0,
  });
  return (
    <>
      <div
        id="app-container"
        className="flex flex-col bg-zinc-100 leading-relaxed font-sans"
      >
        <Header />
        <Main
          setQuantityModalIsOpen={setQuantitySelectionModalisOpen}
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
            onClose={() => setQuantitySelectionModalisOpen(false)}
          />
        )}
      </div>
    </>
  );
}

export default App;
