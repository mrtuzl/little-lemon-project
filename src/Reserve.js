import React from 'react'
import food from '../src/img/restauranfood.jpg';


function Reserve() {
    return (
        <> 
        <React.Fragment className=""> 
        <h1> Little Lemon </h1>
        <span> Chicago </span>
        <p>  Ipsum sadipscing sea sadipscing elitr erat amet lorem, invidunt dolor stet dolor amet, aliquyam tempor invidunt accusam et clita amet.</p>
        <button> Reserve a Table </button>
        </React.Fragment>

        <React.Fragment className=""> 
        <img src={food} alt="restaurant-food"/> 
        </React.Fragment>

        </>
    );
  }
  
  export default Reserve;
  