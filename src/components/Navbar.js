import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from '../components/pages/Auth'
import { projectAuth } from '../firebase'


function Navbar() {
  const [click, setClick] = useState(false);  
  const { currentUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleDropDown = () => setOpen(!open);

  // const [button, setButton] = useState(true);
  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);
  function DropDownMenu() {
    return (
        <div className="dropdown">
            <button onClick={() => {
              projectAuth.signOut();
              setOpen(false); 
            }
            }>
              Sign Out
            </button>
        </div>
    )
}
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'> 

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i className="fas fa-dumbbell"></i>
            <h4 className="thick"> Code Workout </h4> 
            <i className="fas fa-dumbbell"></i>
          </Link>

          {/* hamburger menu */}
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
                Premium Contents
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

            {currentUser ? 
              <li className='nav-item'>           
                <Link to="#" className='nav-links' onClick={handleDropDown}>
                  <i className="fas fa-crown"></i><i className="fas fa-caret-down"></i>
                </Link>
                {open && <DropDownMenu />}
              </li>
              : 
              <li className='nav-item'>
                  <Link
                    to='/signup'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Sign Up
                  </Link>
              </li>
            }

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;