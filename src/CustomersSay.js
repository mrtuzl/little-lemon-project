import React from 'react';
import Testimonial from './Testimonial.js';


function CustomersSay() {
    return (
        <div className='customerSays'> 
        <div className="csTitle"> 
        <h1> Testimonials </h1>
        </div>

        <div className="csContent"> 
        <div className='csContentTop'> 
        <Testimonial 
            testimonialImg=""
            testimonialName="Mert"
            testimonialStar=""
            testimonialComment="lorem ipsum"/>

            <Testimonial 
            testimonialImg=""
            testimonialName="Mert"
            testimonialStar=""
            testimonialComment="lorem ipsum"/>

            <Testimonial 
            testimonialImg=""
            testimonialName="Mert"
            testimonialStar=""
            testimonialComment="lorem ipsum"/>

            <Testimonial 
            testimonialImg=""
            testimonialName="Mert"
            testimonialStar=""
            testimonialComment="lorem ipsum"/>
        </div>

        <div className='csContentBottom'> 
        <Testimonial 
            testimonialImg=""
            testimonialName="Mert"
            testimonialStar=""
            testimonialComment="lorem ipsum"/>

            <Testimonial 
            testimonialImg=""
            testimonialName="Mert"
            testimonialStar=""
            testimonialComment="lorem ipsum"/>

            <Testimonial 
            testimonialImg=""
            testimonialName="Mert"
            testimonialStar=""
            testimonialComment="lorem ipsum"/>

            <Testimonial 
            testimonialImg=""
            testimonialName="Mert"
            testimonialStar=""
            testimonialComment="lorem ipsum"/>
        </div>
            
            
            
        </div>

        </div>
    );
  }
  
  export default CustomersSay;
  