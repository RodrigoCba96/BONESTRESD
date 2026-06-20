import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    // Estado para controlar si el menú móvil está abierto
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="main-header">
            <div className="header-container">
                <div className="logo">
                    <span>Bones Tresd</span>
                </div>

                {/* Botón hamburguesa visible solo en móviles */}
                <div
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {/* Símbolo de hamburguesa simple o la X si está abierto */}
                    {isMenuOpen ? '✕' : '☰'}
                </div>

                {/* Agregamos la clase 'open' si el estado es true */}
                <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#services" onClick={() => setIsMenuOpen(false)}>Servicios</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacto</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;