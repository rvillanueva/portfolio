import React from 'react';
import './drawer.css';
import {Link} from 'react-router-dom';

function Drawer({close}) {
  return (
    <div className="drawer">
      <Link className="drawer__link" to="/about" onClick={close}>About</Link>
      <a className="drawer__link" href="https://medium.com/@ryanjvillanueva" onClick={close}>Blog</a>
      <Link className="drawer__link" to="/contact" onClick={close}>Contact</Link>
    </div>
  );
}

export default Drawer;
