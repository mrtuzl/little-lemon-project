import logo from '../src/Logo.svg';
import { NavLink} from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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
        
            <li> <NavLink to="/"> Home </NavLink>  </li>
            <li> <NavLink to="/"> About </NavLink> </li>
            <li> <NavLink to="/"> Menu </NavLink>  </li>
            <li> <NavLink to="/"> Reservation </NavLink></li>
            <li> <NavLink to="/"> Order Online </NavLink></li>
            <li> <NavLink to="/"> Login </NavLink></li>
          </ul>

         <button className="menuButton" onClick={toggleMenu}>
      {isMenuOpen ? <FaTimes size={25} color='#495E57'/> : <FaBars size={25} color='#495E57'/>}
        </button>

      </div>
      </div>
    
  );
}

export default Nav;
