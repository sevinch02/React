import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
      <div className='header'>
            <NavLink className='header__link' activeclassname='active' to='/IceCream'>IceCreamList</NavLink>
            <NavLink className='header__link' activeclassname='active'  to='/AddIceCream' >Add Ice-cream</NavLink>
      </div>
  );
};

export default Header;
