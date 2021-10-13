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
          Ryan Villanueva is a full stack software engineer in New York City with over {yearsExperienceText} years of professional experience leading technical projects and teams. He graduated from Wharton and worked at IBM Research's innovation lab before moving on to venture-backed startups.
        </div>
      </header>
    );

  }
}

export default Header;
