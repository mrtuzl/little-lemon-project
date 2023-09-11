import React from 'react'
import restaurant from '../src/img/restaurant.jpg';


function Footer() {
  return (
      <> 

        <React.Fragment className=""> 
        <img src={restaurant} alt="restaurant"/> 
        </React.Fragment>

        <React.Fragment className=""> 
        <ul> 
          <li> Dormat Navigation </li>
          <li> Home </li>
          <li> About </li>
          <li> Menu </li>
          <li> Reservations </li>
          <li> Order Online </li>
          <li> Login </li>
        </ul>
        </React.Fragment>

        <React.Fragment className=""> 
        <ul> 
          <li> Contact </li>
          <li> Adress </li>
          <li> Phone Number </li>
          <li> Mail </li>
        </ul>
        </React.Fragment>

        <React.Fragment className=""> 
        <ul> 
          <li> Social Media Links</li>
          <li> Adress </li>
          <li> Phone Number </li>
          <li> Mail </li>
        </ul>
        </React.Fragment>



      </>
  );
}

export default Footer;
