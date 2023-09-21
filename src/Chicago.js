import React from 'react'
import chefb from '../src/img/marioandadrianb.jpg';
import chefa from '../src/img/marioandadriana.jpg';



function Chicago() {
    return (
        <> 
        <div className="chicagoContainer"> 
        <div className="chicago"> 
        <div className="chicagoLeft"> 
        <h1> Little Lemon </h1>
        <span> Chicago </span>
        <p> Elitr sanctus stet kasd clita amet erat, diam diam ea no accusam sit ipsum magna sea rebum, eirmod vero lorem sea invidunt. Gubergren et eirmod et no at eirmod erat. Diam sanctus erat no sadipscing et, et diam diam eos sed, est stet dolores ipsum voluptua et amet et, lorem tempor et lorem eos et sit et diam sit, consetetur elitr ipsum et consetetur ipsum. Invidunt elitr ea et dolor sit lorem amet gubergren lorem, amet amet duo tempor stet.  </p>
        </div>

        <div className="chicagoRight"> 
        <img src={chefa} alt="restaurant-chef"/> 
        <img src={chefb} alt="restaurant-chef"/> 
        </div>
        </div>
        </div>
        </>
    );
  }
  
  export default Chicago;
  