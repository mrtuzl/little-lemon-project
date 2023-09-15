import logo from '../src/Logo.svg';

function Nav() {
  return (
      <div className='navContainer'> 
      <div className="nav"> 
          <img src={logo} alt="little-lemon-logo"/>
          <ul className="active">
            <li> <a href=""> Home </a></li>
            <li> <a href=""> About </a></li>
            <li> <a href=""> Menu </a></li>
            <li> <a href=""> Reservation </a></li>
            <li> <a href=""> Order Online </a></li>
            <li> <a href=""> Login </a></li>
          </ul>
          <div class="burger-menu active">&#9776;</div>
      </div>
      </div>
  );
}

export default Nav;
