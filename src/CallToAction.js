import React, { useState } from 'react'
import food from '../src/img/restauranfood.jpg';
import Reservation from './Reservation.js';




function CallToAction() {
    
    const[reservation, setReservation] = useState();

    const handleReserve = () => {
        setReservation(!reservation);
        console.log(reservation)
    }

    if (reservation === true) {
        
        return (
            <> 
                <Reservation/>
            </>
        );
    } else {
        return (
            <> 
            <div className="ctaContainer" id='reservation'> 
            <div className="cta"> 
            <div className="ctaLeft"> 
            <h1> Little Lemon </h1>
            <span> Chicago </span>
            <p>  Ipsum sadipscing sea sadipscing elitr erat amet lorem, invidunt dolor stet dolor amet, aliquyam tempor invidunt accusam et clita amet.</p>
            <button onClick={handleReserve} className='btn'> Reserve a Table </button>
            </div>
    
            <div className="ctaRight"> 
            <img src={food} alt="restaurant-food"/> 
            </div>
            </div>
            </div>
            </>
        );
        
    }

   
  }
  
  export default CallToAction;
  