import React, { useState, useEffect, useContext } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from '../components/pages/Auth'


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { currentUser } = useContext(AuthContext);

  if(currentUser){
    console.log("Logged In, from Navbar");
  }

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'> 
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i className="fas fa-dumbbell"></i>
            <h3>Code Workout</h3> 
            <i className="fas fa-dumbbell"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/challenge'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mock Coding Interview
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/questions'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Questions
              </Link>
            </li>
            {currentUser ? <i className="nav-links fas fa-crown"></i> : <li>
                <Link
                  to='/signup'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
            </li>}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>LOG IN</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;