import React from "react";
import { motion } from "framer-motion";
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
        <div className="home__header__text">
          <motion.div
            className="home__header__profile"
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src="./images/profile-photo.jpg"
              className="home__header__profile__photo"
              alt="Ryan Villanueva"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            Ryan Villanueva is a full stack software engineer in New York City
            with over {yearsExperienceText} years of professional experience
            leading technical projects and teams. He graduated from Wharton and
            worked at IBM Research's innovation lab before moving on to
            venture-backed startups.
          </motion.div>
        </div>
      </header>
    );
  }
}

export default Header;
