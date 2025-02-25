import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import Main from '../component/Main/Main';
import QuantitySelectionModal from '../component/QuantitySelectionModal/QuantitySelectionModal';

function Home() {
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

export default Home;
