import React from "react";
import { motion } from "framer-motion";
import "./Splash.css";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

class Splash extends React.Component {
  getYearsText(y: number): string {
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
      <header className="home__splash">
        <div
          className="ml-auto mr-auto"
          style={{ width: "80%", maxWidth: 800 }}
        >
          <motion.div
            className="home__splash__profile text-center"
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5 }}
          >
            <img
              src="./images/profile-photo.jpg"
              className="home__splash__profile__photo inline-block"
              alt="Ryan Villanueva"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.4 }}
            className="home__splash__text"
          >
            Ryan Villanueva is a full stack software engineer in New York City
            focused on building agentic AI systems. With over{" "}
            {yearsExperienceText} years of professional experience leading
            technical projects and teams, he designs and ships autonomous
            agents, LLM-powered tools, and the infrastructure that lets them
            work reliably in production. He graduated from Wharton and worked
            at IBM Research's innovation lab before moving to engineering
            leadership at venture-backed startups.
          </motion.div>
          <div className="mt-6 text-center space-x-6">
            {/* <ContactButton /> */}
            <motion.a
              href="https://www.linkedin.com/in/ryanjvillanueva/"
              target="_blank"
              className="inline-block text-gray-400 hover:text-gray-600 cursor-pointer hover:transition-all"
              style={{ fontSize: 28 }}
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
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/rvillanueva"
              target="_blank"
              className="inline-block text-gray-400 hover:text-gray-600 cursor-pointer hover:transition-all"
              style={{ fontSize: 28 }}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: -40 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                duration: 0.5,
                delay: 1.6,
              }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>
      </header>
    );
  }
}

export default Splash;
