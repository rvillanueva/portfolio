import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="home__header">
        <div className="home__header__text">
          Ryan Villanueva is a full stack developer and business strategist in Brooklyn, NY. He graduated from Wharton and has created interactive experiences for organizations like IBM Research, McDonalds, Pepsi, Jo Malone, and AB InBev. 
        </div>
      </header>
    );

  }
}

export default Header;
