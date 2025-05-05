import React from 'react';
import ServiceCard from './components/ServiceCard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header>
        <img src="./assets/handlix-logo.png" alt="Handlix Logo" className="logo" />
        <h1>Handlix</h1>
        <p>Handling Life’s Essentials Effortlessly.</p>
      </header>
      <main>
        <ServiceCard title="Home Cleaning" description="Expert cleaners at your doorstep." />
        <ServiceCard title="Electricians" description="Certified professionals for all repairs." />
        <ServiceCard title="Plumbing" description="Quick fixes and full-service plumbing." />
      </main>
    </div>
  );
};

export default App;
