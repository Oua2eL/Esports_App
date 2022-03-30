import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../slices/userSlice';
import { BsFillCartFill } from 'react-icons/bs';



const Navbar = () => {
  const {cartTotalQuantity} = useSelector(state => state.cart)
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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
  const { isAuth, role } = useSelector((state) => state.user);
  const dispatch = useDispatch()

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className='navbar-teamlogo' src='images/ess.png' alt='logo' />
            ESS E-sports
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
                to='/teams'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Teams
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/shop'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
            </li>  
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
              </li>
              {isAuth && role === 'admin' ? (<li>
              <Link
                to='/dashboard'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </li>) : isAuth && role === 'user' ? (<li>
              <Link
                to='/profile'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>) : (
              <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                SIGN UP
              </Link>
            </li>
            )
            }
          </ul>
          {!isAuth && button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          {isAuth && button && <Button  buttonStyle='btn--outline' onClick={()=>dispatch(logout())}>SIGN OUT</Button>}  
          
          <div className='navcart'>
          <Link to='/shoppingcart'>
          <BsFillCartFill className='carticon' />
          </Link>
          <span className='cartquantity'>{cartTotalQuantity}</span>
          </div>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
