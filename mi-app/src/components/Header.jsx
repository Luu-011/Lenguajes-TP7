import React from 'react';
import './Header.css';
import logoHeader from '../img/logo.header.jpeg';


export default function Header() {
  const HOLA = () => {
    alert('¡Hiciste click!');
  };


  return (
    <header className="main-header">
      <div className="header-container">
       
        <div className="header-logo">
          <a href="#inicio">
            <img
              src={logoHeader}
              alt="Terra Nova - Venta de Terrenos"
              className="logo-img"
            />
          </a>
        </div>


       
        <nav className="header-nav">
          <ul className="nav-list">
            <li><a href="#inicio" className="nav-link">Inicio</a></li>
            <li><a href="#proyecto" className="nav-link">Proyecto</a></li>
            <li><a href="#nosotros" className="nav-link">Acerca de nosotros</a></li>
          </ul>
        </nav>


       
        <div className="header-actions">
          <button className="btn-action" onClick={HOLA}>
            Hacer Click
          </button>
        </div>
      </div>
    </header>
  );
}
