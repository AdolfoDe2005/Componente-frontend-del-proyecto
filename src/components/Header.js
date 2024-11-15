import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importa estilos si tienes

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Inicio</Link></li>
                    <li className="nav-item"><Link to="/tienda">Tienda</Link></li>
                    <li className="nav-item"><Link to="/carrito">Carrito</Link></li>
                    <li className="nav-item"><Link to="/detalle-producto">Detalle Producto</Link></li>
                    <li className="nav-item"><Link to="/checkout">Checkout</Link></li>
                    <li className="nav-item"><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
