import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import {MdSearch, MdShoppingBasket} from 'react-icons/md'
import {useStateValue} from '../../redux/stateProvider.js';


const Header = () => {
  const [{basket}] = useStateValue();
  return (
    <nav className='header'>
      <Link to='/'>
      <img 
        className='header_logo' 
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        alt='' 
        />
      </Link>
      <div className="header-search">
        <input type="text" className="header-search-input" />
        <MdSearch className='icon-search' size={25} />
      </div>
      <div className="header-nav">
        <Link to='/login' className='header-link'>
          <div className="header-option">
            <span>Hello Matheus</span>
            <span>Sign In</span>
          </div>
        </Link>
        <Link to='/login' className='header-link'>
          <div className="header-option">
            <span>Returns</span>
            <span>& Orders</span>
          </div>
        </Link>
        <Link to='/login' className='header-link'>
          <div className="header-option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
        <Link className='header-link' to='checkout'>  
          <div className="header-option-basket">
            <MdShoppingBasket size={22} />
            <span className='header-option-basket-count'>{basket?.length}</span>
          </div>
        </Link>
       
      </div>
    </nav>
  );
}




export default Header;