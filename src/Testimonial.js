import React from 'react';


function Testimonial(props) {
    return (
        <div className='testimonial'> 
          <div className='tImg'>  <img src={props.testimonialImg} alt="testimonial"/>   </div>
          <div className='tName'> 
          <span> {props.testimonialName}</span>
          <img src={props.testimonialStar} alt="testimonial"/>
          </div>
          <div className='tComment'> 
          <p> {props.testimonialComment} </p>
          </div>
        </div>
    );
  }
  
  export default Testimonial;
  