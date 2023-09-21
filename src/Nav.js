import logo from '../src/Logo.svg';
import { NavLink} from 'react-router-dom';

function Nav() {
  return (
  
      <div className='navContainer'> 
      <div className="nav"> 
          <img src={logo} alt="little-lemon-logo"/>

        
          <ul className="active">
            <li> <NavLink to="/"> Home </NavLink>  </li>
            <li> <NavLink to="/"> About </NavLink> </li>
            <li> <NavLink to="/"> Menu </NavLink>  </li>
            <li> <NavLink to="/"> Reservation </NavLink></li>
            <li> <NavLink to="/"> Order Online </NavLink></li>
            <li> <NavLink to="/"> Login </NavLink></li>
          </ul>
        
      </div>
      </div>
    
  );
}

export default Nav;
