import React, { useEffect, useRef, useState } from "react";
import "./contact-page.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";

function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const envelopeRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="contact-page">
      <div className="contact__text-container">
        <CSSTransition
          in={isLoaded}
          timeout={1000}
          classNames="envelope-animation"
          nodeRef={envelopeRef}
        >
          <div ref={envelopeRef} className="contact-envelope text-center">
            <HiOutlineMailOpen className="inline-block" />
          </div>
        </CSSTransition>
        <div className="contact__text">
          Interested in chatting? Shoot me an email at{" "}
          <a href="mailto:ryan@rvillanueva.dev">ryan@rvillanueva.dev</a>.
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
