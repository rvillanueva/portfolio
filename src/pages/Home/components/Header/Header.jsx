import React from "react";
import {motion} from 'framer-motion'
import "./Header.css";

class Header extends React.Component {
  getYearsText(y) {
    const yearsText = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
      "twenty",
    ];
    return yearsText[y] || String(y);
  }
  render() {
    const yearsExperience = new Date().getFullYear() - 2014;
    const yearsExperienceText = this.getYearsText(yearsExperience);
    return (
      <header className="home__header">
        <motion.div className="home__header__text" initial={{opacity: 0, y: 200}} whileInView={{opacity: 1, y: 0}}>
          <motion.div className="home__header__profile" >
            <img
              src="./images/profile-photo.jpg"
              className="home__header__profile__photo"
              alt="Ryan Villanueva"
            />
          </motion.div>
          <div>
            Ryan Villanueva is a full stack software engineer in New York City
            with over {yearsExperienceText} years of professional experience
            leading technical projects and teams. He graduated from Wharton and
            worked at IBM Research's innovation lab before moving on to
            venture-backed startups.
          </div>
        </motion.div>
      </header>
    );
  }
}

export default Header;
