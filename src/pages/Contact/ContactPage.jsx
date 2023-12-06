import React from "react";
import "./contact-page.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";

class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }
  render() {
    return (
      <div className="contact-page">
        <div className="contact__text-container">
          <CSSTransition
            in={this.state.isLoaded}
            timeout={1000}
            classNames="envelope-animation"
          >
            <div className="contact-envelope text-center">
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
}

export default ContactPage;
