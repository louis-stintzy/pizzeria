import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Header from '../Header/Header';
import useStore from '../../store/store';
import QuantitySelectionModal from '../QuantitySelectionModal/QuantitySelectionModal';

function App() {
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
        <Main />
        <Footer />
        {quantitySelectionModalisOpen && <QuantitySelectionModal />}
      </div>
    </>
  );
}

export default App;
