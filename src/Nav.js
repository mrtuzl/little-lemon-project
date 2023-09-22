import logo from '../src/Logo.svg';
<<<<<<< HEAD
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll';
=======
import { NavLink} from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
>>>>>>> 2b09fa6262814f58ff9dbc4e9ec44818238c8316

function Nav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  
      <div className='navContainer'> 
      <div className="nav"> 

          <img src={logo} alt="little-lemon-logo"/>
         
        <ul className={` ${isMenuOpen ? 'open' : ''}`}>
<<<<<<< HEAD
 
        
            <li> <Link to="home" spy={true}   isDynamic={true}  spyThrottle={500} smooth={true} offset={-100} duration={1000}> Home </Link> </li>
            <li> <Link to="about" spy={true}   isDynamic={true}  spyThrottle={500} smooth={true} offset={-100} duration={1000}> About </Link> </li>
            <li> <Link to="menu" spy={true}   isDynamic={true}  spyThrottle={500} smooth={true} offset={-100} duration={1000}> Menu </Link>  </li>
            <li> <Link to="reservation" spy={true}   isDynamic={true}  spyThrottle={500} smooth={true} offset={-100} duration={1000}> Reservation </Link> </li>
            <li> <Link to="reservation" spy={true}   isDynamic={true}  spyThrottle={500} smooth={true} offset={-100} duration={1000}> Order Online </Link> </li>
            <li> <Link to="reservation" spy={true}   isDynamic={true}  spyThrottle={500} smooth={true} offset={-100} duration={1000}> Login </Link>  </li>
          </ul>
          
=======
        
            <li> <NavLink to="/"> Home </NavLink>  </li>
            <li> <NavLink to="/"> About </NavLink> </li>
            <li> <NavLink to="/"> Menu </NavLink>  </li>
            <li> <NavLink to="/"> Reservation </NavLink></li>
            <li> <NavLink to="/"> Order Online </NavLink></li>
            <li> <NavLink to="/"> Login </NavLink></li>
          </ul>

>>>>>>> 2b09fa6262814f58ff9dbc4e9ec44818238c8316
         <button className="menuButton" onClick={toggleMenu}>
      {isMenuOpen ? <FaTimes size={25} color='#495E57'/> : <FaBars size={25} color='#495E57'/>}
        </button>

      </div>
      </div>
    
  );
}

export default Nav;