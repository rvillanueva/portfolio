import React from "react";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Background from "./components/Background/Background";
import portfolioData from "../../data/portfolioData";
import "./home-page.css";
import { CSSTransition } from "react-transition-group";
import Skills from "./Skills";
import Companies from "./Companies";

function HomePage({
  isLoaded,
  isScrolledDown,
  openProjectById,
  loadBackground,
  loadPortfolio,
}) {
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
      {loadPortfolio ? null : <div className="home-page__header__spacer" />}
      <CSSTransition
        mountOnEnter
        in={window.scrollY > 300 ? true : loadPortfolio}
        timeout={2000}
        classNames="fade-in-portfolio"
      >
        <Portfolio
          openProjectById={openProjectById}
          items={portfolioData.items}
        />
      </CSSTransition>
    </div>
  );
}

export default HomePage;
