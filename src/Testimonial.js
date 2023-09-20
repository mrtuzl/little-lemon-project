import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';


function Testimonial(props) {
    return (
        <div className='testimonial'> 
          <div className='tIcon'> <AiTwotoneStar/> <AiTwotoneStar/> <AiTwotoneStar/> <AiTwotoneStar/> <AiTwotoneStar/>   </div>
          <div className='tName'> 
          <img src={props.testimonialImg} alt="testimonial"/>
          <span> {props.testimonialName}</span>
          </div>
          <div className='tComment'> 
          <p> {props.testimonialComment} </p>
          </div>
        </div>
    );
  }
  
  export default Testimonial;
  