import React from 'react';
import './Institucional.css';
import imagenFerula from '../../assets/ferula-brazo.png';
import imagenBanner from '../../assets/catalogo-banner.jpg';

const Institucional = () => {
    return (
        <section className="bones-institucional" id="institucional">
            <div className="institucional-container">

                {/* Bloque 1: Presentación e Imagen */}
                <div className="intro-grid">
                    <div className="intro-content">
                        <span className="section-tag">QUIÉNES SOMOS</span>
                        <h2>
                            Innovación anatómica en <br />
                            <span className="highlight-text">Ortopedia 3D</span>
                        </h2>
                        <p>
                            <strong>Bones TresD</strong> es una Ortopedia especializada en el desarrollo,
                            fabricación y provisión de dispositivos ortopédicos personalizados mediante
                            tecnologías de diseño digital, escaneo tridimensional e impresión 3D.
                        </p>
                        <p>
                            Nuestro objetivo es mejorar los resultados clínicos y la experiencia del paciente
                            a través de soluciones innovadoras, anatómicas y adaptadas a las necesidades de cada tratamiento.
                            Trabajamos junto a instituciones de salud, obras sociales, empresas de medicina prepaga y
                            profesionales médicos.
                        </p>
                    </div>
                    <div className="intro-image">
                        <img
                            src={imagenFerula}
                            alt="Férula 3D Bones TresD"
                            className="real-image"
                        />
                    </div>
                </div>

                {/* Bloque 2: Actividad Principal */}
                <div className="activities-wrapper">
                    <div className="activities-header">
                        <h3>Actividad Principal</h3>
                        <p>Alternativas tecnológicas de última generación para traumatología, ortopedia y rehabilitación.</p>
                    </div>
                    <div className="activities-grid">
                        <div className="activity-card">
                            <div className="activity-icon">🦴</div>
                            <h4>Provisión de férulas</h4>
                            <p>Dispositivos ortopédicos personalizados impresos en 3D con resina biocompatible y resistente al agua.</p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-icon">🦾</div>
                            <h4>Desarrollo de ortesis</h4>
                            <p>Creación de dispositivos de inmovilización avanzados adaptados a la morfología del paciente.</p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-icon">🧠</div>
                            <h4>Biomodelos anatómicos</h4>
                            <p>Modelos de alta precisión diseñados para la planificación quirúrgica detallada.</p>
                        </div>
                        <div className="activity-card">
                            <div className="activity-icon">💻</div>
                            <h4>Diseño Digital</h4>
                            <p>Soluciones de manufactura aditiva y diseño 3D aplicado a la salud y rehabilitación.</p>
                        </div>
                    </div>
                </div>

                {/* Bloque 3: Imagen a lo ancho y Contacto */}
                <div className="tech-banner">
                    <img
                        src={imagenBanner}
                        alt="Catálogo de productos impresos en 3D"
                        className="banner-image"
                    />
                </div>

                <div className="contact-info-card">
                    <div className="contact-details">
                        <h4>Dirección Técnica y Contacto</h4>
                        <p className="director-name">Bioingeniera Oliva María Noel</p>
                        <ul className="contact-list">
                            <li>
                                <strong>Teléfono:</strong> (380) 4247178
                            </li>
                            <li>
                                <strong>Email:</strong> info@bonestresd.com
                            </li>
                            <li>
                                <strong>Ubicación:</strong> Calle pública S/N, Barrio Altos del Sol, La Rioja Capital.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Institucional;