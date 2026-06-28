// src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Institucional from './components/Institucional/Institucional';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Institucional />
      </main>
    </div>
  );
}

export default App;