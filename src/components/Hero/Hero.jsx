import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Esta capa oscurece un poco la imagen de fondo para que el texto blanco se lea perfecto */}
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="font-light">PROTESIS</span><br />
                    EN,<br />
                    TRESD<br />
                    (EN CONSTRUCCIÓN)
                </h1>
                <button className="hero-button">
                    Conócenos
                </button>
            </div>
        </section>
    );
};

export default Hero;