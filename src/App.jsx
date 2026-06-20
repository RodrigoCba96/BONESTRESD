// src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        {/*(Servicios, Proyectos, etc.) */}
      </main>
    </div>
  );
}

export default App;