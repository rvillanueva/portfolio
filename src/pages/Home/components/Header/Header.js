import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="home__header">
        <div className="home__header__text">
          Ryan Villanueva is a NYC-based full stack developer who specializes in emerging technologies. He graduated from Wharton and has worked with organizations like IBM Research, McDonalds, Pepsi, Jo Malone, and AB InBev. 
        </div>
      </header>
    );

  }
}

export default Header;
