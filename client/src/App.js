import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';
import Banner from './components/Banner/Banner.js';
import Laydowns from './components/laydown/Laydown.js';


function App() {
  return (
    <div className="App">
      {/* ----------------------------- HEADER ----------------------------- */}
      <Header />
      {/* ---------------------------------- MAIN ---------------------------------- */}
      <Banner />
      
      <Laydowns />
      

    </div>
  );
}

export default App;
