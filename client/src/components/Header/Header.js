import React, { useState } from 'react';
import logoX from './logo-X1.png';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  // Estado para o item ativo
  const [activeLink, setActiveLink] = useState('/');

  // Função para atualizar o estado do link ativo
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <center>
        <nav className="navbar navbar-expand-lg body-tertiary" style={{ backgroundColor: 'transparent' }}>
          <div className="container-fluid">
            <img src={logoX} className="LogoX" alt="Xlogo" width="100" height="50" />
            <a className="navbar-brand" href="/" style={{ fontSize: '40px' }}><b><i>X-DATA</i></b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className={`nav-link ${activeLink === '/' ? 'active1' : ''}`} onClick={() => handleLinkClick('/')}><b>Inicio</b></Link>
                </li>

                <li className="nav-item">
                  <Link to="/Especificacoes" className={`nav-link ${activeLink === '/Especificacoes' ? 'active1' : ''}`} onClick={() => handleLinkClick('/Especificacoes')}><b>Especificações</b></Link>
                </li>

                <li className="nav-item">
                  <Link to="/Quem-Somos" className={`nav-link ${activeLink === '/Quem-Somos' ? 'active1' : ''}`} onClick={() => handleLinkClick('/Quem-Somos')}><b>Quem somos</b></Link>
                </li>

                <li className="nav-item">
                  <a className={`nav-link ${activeLink === '/Fale-Conosco' ? 'active1' : ''}`} href="#" onClick={() => handleLinkClick('/Fale-Conosco')}><b>Fale Conosco</b></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </center>
    </header>
  );
}
