import React from 'react';
import Footer from '../components/Footer';
import NavSignOut from '../components/NavSignOut';
import Hero from '../components/Hero';
import Features from '../components/Features';

/**
* create Home page
*
* @return html - Home page
*/
const Home = () => {
  return (
    <div>
      <NavSignOut/>
    <main>
      <Hero/>
      <Features/>
    </main>
    <Footer/>
    </div>
  );
};

export default Home;