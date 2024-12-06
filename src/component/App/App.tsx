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
  const appContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
    lineHeight: '1.6',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif, sans-serif',
  };
  return (
    <>
      <div className="app-container" style={appContainerStyle}>
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
