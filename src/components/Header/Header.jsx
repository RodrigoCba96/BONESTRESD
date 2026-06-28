import React, { useState } from 'react';
import './Header.css';
// Importamos tu logo desde la carpeta assets
import logoBones from '../../assets/bones-logo-blanco.jpg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="main-header">
            <div className="header-container">
                <div className="logo">
                    {/* Colocamos la imagen del logo */}
                    <a href="#">
                        <img src={logoBones} alt="Bones TresD" />
                    </a>
                </div>

                <div
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </div>

                <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#institucional" onClick={() => setIsMenuOpen(false)}>Institucional</a>
                    <a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a>
                    <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;