import React from 'react'
import Specials from './Specials.js';
import CustomersSay from './CustomersSay.js';
import Chicago from './Chicago.js';

function Homepage() {
  return (
      <> 
        <Specials/> 
        <CustomersSay/>
        <Chicago/>
      </>
  );
}

export default Homepage;