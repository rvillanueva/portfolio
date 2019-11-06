import React from 'react';
import './navbar.css';

function Navbar({hideLogo}) {
  return (
    <div className="navbar">
      <div className="navbar__left">
        {hideLogo ? null : <div className="navbar__logo">Ryan Villanueva</div>}
      </div>
      <div className="navbar__right">
        <a className="navbar__link" href="https://medium.com/@ryanjvillanueva">Blog</a>
        <a className="navbar__link" href="https://github.com/rvillanueva">Github</a>
        <a className="navbar__link" href="https://www.linkedin.com/in/ryanjvillanueva/">LinkedIn</a>
      </div>
    </div>
  );
}

export default Navbar;
