import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Header from '../Header/Header';
import QuantitySelectionModal from '../QuantitySelectionModal/QuantitySelectionModal';

function App() {
  return (
    <>
      <div
        id="app-container"
        className="flex min-h-screen flex-col bg-zinc-100 font-sans leading-relaxed"
      >
        <Header />
        <Main />
        <Footer />
        <QuantitySelectionModal />
      </div>
    </>
  );
}

export default App;
