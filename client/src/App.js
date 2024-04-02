import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';
import Banner from './components/Banner/Banner.js';
import Laydowns from './components/laydown/Laydown.js';
import Footer from './components/Footer/Footer.js';


function App() {
  return (
    <div className="App">
      {/* ----------------------------- HEADER - PAGE ----------------------------- */}
      <Header />
      {/* ---------------------------------- CONTEUDO - MAIN PAGE ---------------------------------- */}
      <Banner />
      <Laydowns />
      {/* ---------------------------------- FOOTER - MAIN PAGE ---------------------------------- */}
      <Footer />


    </div>
  );
}

export default App;
