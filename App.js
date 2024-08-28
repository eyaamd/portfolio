import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Shop from './Components/Shop/Shop';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="shop">
        <Shop />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
