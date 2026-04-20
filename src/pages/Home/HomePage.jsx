import React from "react";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Background from "./components/Background/Background";
import portfolioData from "../../data/portfolioData";
import "./home-page.css";
import { motion } from "framer-motion";
import Skills from "./Skills";
import Companies from "./Companies";

function HomePage({ openProjectById, loadBackground, loadPortfolio }) {
  const showPortfolio = window.scrollY > 300 || loadPortfolio;
  return (
    <div className="home-page">
      {loadBackground ? <Background /> : null}
      <Header />
      <div className="mt-40 mb-40">
        <Skills />
      </div>
      <div className="mt-40 mb-40">
        <Companies />
      </div>
      {showPortfolio ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <Portfolio
            openProjectById={openProjectById}
            items={portfolioData.items}
          />
        </motion.div>
      ) : (
        <div className="home-page__header__spacer" />
      )}
    </div>
  );
}

export default HomePage;
