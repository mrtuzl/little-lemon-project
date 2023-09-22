import React from 'react';
import Card from './Card.js';
import greekSalad from './img/greek salad.jpg';
import bruchetta from './img/bruchetta.jpg';
import lemonDessert from './img/lemon dessert.jpg';


function Specials() {
    return (
        <div className="specialsContainer" id='menu'> 
        <div className="specials"> 
        <div className="specialsTop"> 
        <h1> This weeks specials! </h1>
        <button> Online Menu </button>
        </div>

        <div className="specialsBottom"> 
            <Card specialPic={greekSalad}
             specialName="Greek Salad"
             specialPrice="$12.99"
             specialDescription="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
            
            <Card specialPic={bruchetta}
             specialName="Bruchetta"
             specialPrice="$5.99"
             specialDescription="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."/>

            <Card specialPic={lemonDessert}
             specialName="Lemon Dessert"
             specialPrice="$5.00"
             specialDescription="This comes straigth from grandma's recipe book, every last ingrediant has been sourced and is as authentic as can be imagined."/>
        </div>
        </div>
        </div>
    );
  }
  
  export default Specials;
  