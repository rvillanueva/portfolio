import React from "react";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Background from "./components/Background/Background";
import portfolioData from "../../data/portfolioData";
import "./home-page.css";
import { CSSTransition } from "react-transition-group";

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
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isLoaded}
        timeout={2000}
        classNames="fade-in-up"
      >
        <Header />
      </CSSTransition>
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
