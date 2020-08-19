import React from 'react';
import './Header.css';

class Header extends React.Component {
  getYearsText(y) {
    const yearsText = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    return yearsText[y] || String(y);
  }
  render() {
    const yearsExperience = new Date().getFullYear() - 2014;
    const yearsExperienceText = this.getYearsText(yearsExperience)
    return (
      <header className="home__header">
        <div className="home__header__text">
          Ryan Villanueva is a full stack developer in New York City with over {yearsExperienceText} years of professional experience leading technical projects and teams. He graduated from Wharton and has worked with organizations like IBM Research, McDonalds, Pepsi, Jo Malone, and AB InBev. 
        </div>
      </header>
    );

  }
}

export default Header;
