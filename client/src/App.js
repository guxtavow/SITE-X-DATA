import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js'
import Footer from './components/Footer/Footer.js';
/*
import Banner from './components/Banner/Banner.js';
import Laydowns from './components/laydown/Laydown.js';
import Footer from './components/Footer/Footer.js';
*/
import Especificacao from './components/Rotas/Especificacoes/Especifica.js';
import Valores from './components/Rotas/Valores/Valores.js'


function App() {
  return (
    <div className="App">
      {/* ----------------------------- HEADER - PAGE ----------------------------- */}
      <Router> {/* ELEMENTO ROUTER */}
        <Header /> {/* NAVBAR GLOBAL */}
          <Routes> {/* ROTAS */}
            <Route exact path="/" element={<Home/>} />      {/* ---------------------------------- CONTEUDO - MAIN PAGE ---------------------------------- */}
            <Route path="/Especificacoes" element={<Especificacao />} /> {/* ---------------------------------- CONTEUDO - ESPECIFICAÇÃO ---------------------------------- */}
            <Route path="/Valores" element={<Valores />} /> {/* ---------------------------------- CONTEUDO - VALORES ---------------------------------- */}
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
