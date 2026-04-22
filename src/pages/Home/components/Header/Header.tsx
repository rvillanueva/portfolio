import { motion } from "framer-motion";
import "./Header.css";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const YEARS_TEXT = [
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

function getYearsText(y: number): string {
  return YEARS_TEXT[y] || String(y);
}

export default function Header() {
  const yearsExperience = new Date().getFullYear() - 2014;
  const yearsExperienceText = getYearsText(yearsExperience);

  return (
    <header className="home__header">
      <div className="home__header__inner">
        <motion.div
          className="home__header__profile"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 1.1, delay: 0.1 }}
        >
          <img
            src="./images/profile-photo.jpg"
            className="home__header__profile__photo"
            alt="Ryan Villanueva"
          />
        </motion.div>

        <motion.h1
          className="home__header__heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
        >
          Ryan Villanueva
        </motion.h1>

        <motion.p
          className="home__header__text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        >
          A full-stack software engineer in New York City with over{" "}
          {yearsExperienceText} years leading technical projects and teams.
          Wharton graduate, formerly at IBM Research&rsquo;s innovation lab,
          now in engineering leadership at venture-backed startups.
        </motion.p>

        <motion.div
          className="home__header__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="mailto:ryan@rvillanueva.dev"
            className="home__header__cta"
          >
            Get in touch
            <HiOutlineArrowUpRight className="home__header__cta__icon" />
          </a>
          <div className="home__header__socials">
            <a
              href="https://www.linkedin.com/in/ryanjvillanueva/"
              target="_blank"
              rel="noreferrer"
              className="home__header__social"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/rvillanueva"
              target="_blank"
              rel="noreferrer"
              className="home__header__social"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
