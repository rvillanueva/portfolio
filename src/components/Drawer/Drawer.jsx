import React from 'react';
import './drawer.css';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';

function Drawer({close, isOpen}) {
  return (
    <div>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isOpen}
        timeout={{
          enter: 200,
          exit: 100
        }}
        classNames="drawer-animation-overlay">
        <div className="drawer-overlay" onClick={close}>

        </div>
      </CSSTransition>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isOpen}
        timeout={{
          enter: 200,
          exit: 100
        }}
        classNames="drawer-animation">
          <div className="drawer">
            <Link className="drawer__link" to="/" onClick={close}>Portfolio</Link>
            <Link className="drawer__link" to="/about" onClick={close}>About</Link>
            <a className="drawer__link" href="https://medium.com/@ryanjvillanueva" onClick={close}>Blog</a>
            <Link className="drawer__link" to="/contact" onClick={close}>Contact</Link>
          </div>
      </CSSTransition>
    </div>
  );
}

export default Drawer;
