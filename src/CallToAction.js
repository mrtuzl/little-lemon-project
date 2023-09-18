import React from 'react'
import food from '../src/img/restauranfood.jpg';



function CallToAction() {
    return (
        <> 
        <div className="ctaContainer"> 
        <div className="cta"> 
        <div className="ctaLeft"> 
        <h1> Little Lemon </h1>
        <span> Chicago </span>
        <p>  Ipsum sadipscing sea sadipscing elitr erat amet lorem, invidunt dolor stet dolor amet, aliquyam tempor invidunt accusam et clita amet.</p>
        <button> Reserve a Table </button>
        </div>

        <div className="ctaRight"> 
        <img src={food} alt="restaurant-food"/> 
        </div>
        </div>
        </div>
        </>
    );
  }
  
  export default CallToAction;
  