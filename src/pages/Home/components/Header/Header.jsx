import React from "react";
import { motion } from "framer-motion";
import "./Header.css";
import { SiLinkedin, SiGithub } from "react-icons/si";

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
            className="home__header__profile text-center"
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5 }}
          >
            <img
              src="./images/profile-photo.jpg"
              className="home__header__profile__photo inline-block"
              alt="Ryan Villanueva"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.4 }}
          >
            Ryan Villanueva is a full stack software engineer in New York City
            with over {yearsExperienceText} years of professional experience
            leading technical projects and teams. He graduated from Wharton and
            worked at IBM Research's innovation lab before moving on to
            venture-backed startups.
          </motion.div>
          <motion.div
            className="text-center mt-8  space-x-6"
            style={{ fontSize: 24 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/ryanjvillanueva/"
              className="inline-block text-gray-400 hover:text-gray-600 cursor-pointer hover:transition-all"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -40 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 0.5,
                delay: 1.2,
              }}
            >
              <SiLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/rvillanueva"
              className="inline-block text-gray-400 hover:text-gray-600 cursor-pointer hover:transition-all"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -40 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 0.5,
                delay: 1.4,
              }}
            >
              <SiGithub />
            </motion.a>
          </motion.div>
        </div>
      </header>
    );
  }
}

export default Header;
