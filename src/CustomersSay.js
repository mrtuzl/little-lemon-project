import React from 'react';
import Testimonial from './Testimonial.js';
import person1 from './img/person1.jpg';
import person2 from './img/person2.jpg';
import person3 from './img/person3.jpg';
import person4 from './img/person4.jpg';



function CustomersSay() {
    return (
        <div className='customerSaysContainer'> 
        <div className='customerSays'> 
        <div className="csTitle"> 
        <h1> Testimonials </h1>
        </div>

        <div className="csContent"> 
        <Testimonial 
            testimonialName="Beatrice"
            testimonialImg={person1}
            testimonialComment="Review text lorem ipsum dolar"/>

            <Testimonial 
 
            testimonialName="Roy"
            testimonialImg={person2}
            testimonialComment="Review text lorem ipsum dolar"/>

            <Testimonial 
  
            testimonialName="Jean"
            testimonialImg={person3}
            testimonialComment="Review text lorem ipsum dolar"/>

            <Testimonial 
       
            testimonialName="Felicia"
            testimonialImg={person4}
            testimonialComment="Review text lorem ipsum dolar"/>
        </div>
        </div>
        </div>
    );
  }
  
  export default CustomersSay;
  