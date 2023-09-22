import React from 'react'
import Specials from './Specials.js';
import CustomersSay from './CustomersSay.js';
import Chicago from './Chicago.js';
import CallToAction from './CallToAction.js';


function Homepage() {

  
  return (
      <> 
      <div id='home'> 
        <CallToAction/>
        <Specials/> 
        <CustomersSay/>
        <Chicago/>
        </div>
      </>
  );
}

export default Homepage;