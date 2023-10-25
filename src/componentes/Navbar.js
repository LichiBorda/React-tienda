import React from 'react'
import CartWidget from './CartWidget';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">CLK VAPES</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Vapes
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/category/2500">2500 puffs</a></li>
                <li><a className="dropdown-item" href="/category/3500">3500 puffs</a></li>
                <li><a className="dropdown-item" href="#"></a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contactos</a>
            </li>
            <li className="nav-item">
              <CartWidget/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}



export default Navbar