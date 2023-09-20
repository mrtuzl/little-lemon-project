import React from 'react'
import restaurant from '../src/img/restaurant.jpg';


function Footer() {
  return (
      <> 
        <div className='footerContainer'> 
          <div className='footer'> 
        <div className="footerImg"> 
        <img src={restaurant} alt="restaurant"/> 
        </div>

        <div className="footerNav"> 
        <ul> 
          <li> Dormat Navigation </li>
          <li> Home </li>
          <li> About </li>
          <li> Menu </li>
          <li> Reservations </li>
          <li> Order Online </li>
          <li> Login </li>
        </ul>
        </div>

        <div className="footerContact"> 
        <ul> 
          <li> Contact </li>
          <li> Adress </li>
          <li> Phone Number </li>
          <li> Mail </li>
        </ul>
        </div>

        <div className="footerSocial"> 
        <ul> 
          <li> Social Media Links</li>
          <li> Adress </li>
          <li> Phone Number </li>
          <li> Mail </li>
        </ul>
        </div>


        </div>
          </div>
      </>
  );
}

export default Footer;
