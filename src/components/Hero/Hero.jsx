import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    PROTESIS<br />
                    <span>EN,<br />TRESD <br />(En construcción)</span>
                </h1>
                <button className="hero-button">
                    Conócenos
                </button>
            </div>
        </section>
    );
};

export default Hero;