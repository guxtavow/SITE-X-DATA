import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header.js';
import Home from './pages/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Especificacao from './pages/Especificacoes/Especifica.js';
import QuemSomos from './pages/QuemSomos/QuemSomos.js';


function App() {
  return (
    <div className="App">
      {/* ----------------------------- HEADER - PAGE ----------------------------- */}
      <Router> {/* ELEMENTO ROUTER */}
        <Header /> {/* NAVBAR GLOBAL */}
          <Routes> {/* ROTAS */}
            <Route path="/" element={<Home/>} />      {/* ---------------------------------- CONTEUDO - MAIN PAGE COM BARRAS ---------------------------------- */}
            <Route path="/SITE-X-DATA" element={<Home/>} />      {/* ---------------------------------- CONTEUDO - MAIN PAGE ---------------------------------- */}
            <Route path="/Especificacoes" element={<Especificacao />} /> {/* ---------------------------------- CONTEUDO - ESPECIFICAÇÃO ---------------------------------- */}
            <Route path="/Quem-Somos" element={<QuemSomos />} />
          </Routes>
        <Footer />{/* FOOTER GLOBAL */}
      </Router>
    </div>
  );
}

export default App;
