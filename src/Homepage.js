import React from 'react'
import Specials from './Specials.js';
import CustomersSay from './CustomersSay.js';
import About from './About.js';

function Homepage() {
  return (
      <> 
        <Specials/> 
        <CustomersSay/>
        <About/>
      </>
  );
}

export default Homepage;