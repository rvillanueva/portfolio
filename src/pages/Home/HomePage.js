import React from 'react';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import portfolioData from '../../data/portfolioData';
import './home-page.css';
import {CSSTransition} from 'react-transition-group';

function HomePage({isLoaded, isScrolledDown, openProjectById}) {
  return (
    <div className="home-page">
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={isLoaded}
        timeout={2000}
        classNames="fade-in-up">
        <Header />
      </CSSTransition>
      <CSSTransition
        mountOnEnter
        in={window.scrollY > 300 ? true : isLoaded}
        timeout={2000}
        classNames="fade-in-portfolio">
        <Portfolio openProjectById={openProjectById} items={portfolioData.items} />
      </CSSTransition>
      <div className="self-splash" style={{
          backgroundImage: `url('./images/self.jpg')`
      }}></div>
    </div>
  );
}

export default HomePage;
