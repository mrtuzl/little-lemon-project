import React from 'react';
import { MdDeliveryDining } from 'react-icons/md';


function Card(props) {
    return (
        <> 
        <div className='card'> 
            <div className='cardTop'> 
                <img src={props.specialPic} alt="specials"/> 
            </div>
            <div className='cardBottom'>
                <div className='name-price'> 
                <span> {props.specialName}</span>
                <span> {props.specialPrice}</span>
                </div>    
                <div className='description'> 
                <p> {props.specialDescription} </p>
                </div>  
                <div className='order'> 
                <span> Order a delivery</span>
                <span> <MdDeliveryDining/> </span>
                </div>  
            </div>
        </div>
        </>
    );
  }
  
  export default Card;
  