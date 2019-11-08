import React from 'react';
import './contact-page.css';
import {Navbar} from '../../components';

function ContactPage() {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact__text-container">
        <div className="contact__text">
          Interested in chatting? Shoot me an email at <a href="mailto:ryan@rvillanueva.co">ryan@rvillanueva.co</a>.
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
