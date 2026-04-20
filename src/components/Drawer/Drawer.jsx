import React, { useRef } from "react";
import "./drawer.css";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function Drawer({ close, isOpen }) {
  const overlayRef = useRef(null);
  const drawerRef = useRef(null);
  return (
    <div>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isOpen}
        timeout={{ enter: 200, exit: 100 }}
        classNames="drawer-animation-overlay"
        nodeRef={overlayRef}
      >
        <div ref={overlayRef} className="drawer-overlay" onClick={close} />
      </CSSTransition>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isOpen}
        timeout={{ enter: 200, exit: 100 }}
        classNames="drawer-animation"
        nodeRef={drawerRef}
      >
        <div ref={drawerRef} className="drawer">
          <Link className="drawer__link" to="/" onClick={close}>
            Portfolio
          </Link>
          <Link className="drawer__link" to="/about" onClick={close}>
            About
          </Link>
          <a
            className="drawer__link"
            href="https://medium.com/@ryanjvillanueva"
            onClick={close}
          >
            Blog
          </a>
          <Link className="drawer__link" to="/contact" onClick={close}>
            Contact
          </Link>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Drawer;
