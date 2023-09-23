import logo from '../src/Logo.svg';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll';

function Nav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  
      <div className='navContainer'> 
      <div className="nav"> 
     
          <a href="./"> <img src={logo} alt="little-lemon-logo"/> </a>
        
        <ul className={` ${isMenuOpen ? 'open' : ''}`}>
 
        
            <li> <Link to="home" spy={true}   isDynamic={true}  spyThrottle={500} smooth={true} offset={-100} duration={1000}> Home </Link> </li>
            <li> <Link to="about" spy={true}   isDynamic={true}  spyThrottle={500} smooth={true} offset={-100} duration={1000}> About </Link> </li>
            <li> <Link to="menu" spy={true}   isDynamic={true}  spyThrottle={500} smooth={true} offset={-100} duration={1000}> Menu </Link>  </li>
            <li> <Link to="reservation" spy={true}   isDynamic={true}  spyThrottle={500} smooth={true} offset={-100} duration={1000}> Reservation </Link> </li>
            <li> <Link to="reservation" spy={true}   isDynamic={true}  spyThrottle={500} smooth={true} offset={-100} duration={1000}> Order Online </Link> </li>
            <li> <Link to="reservation" spy={true}   isDynamic={true}  spyThrottle={500} smooth={true} offset={-100} duration={1000}> Login </Link>  </li>
          </ul>
          
         <button className="menuButton" onClick={toggleMenu}>
      {isMenuOpen ? <FaTimes size={25} color='#495E57'/> : <FaBars size={25} color='#495E57'/>}
        </button>

      </div>
      </div>
    
  );
}

export default Nav;