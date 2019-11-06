import React from 'react';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import portfolioData from '../../data/portfolioData';
import './home-page.css';
import {Navbar} from '../../components';

function HomePage({isScrolledDown}) {
  return (
    <div className="home-page">
      <Navbar hideLogo={!isScrolledDown}/>
      <Header />
      <Portfolio items={portfolioData.items} />
      <div className="self-splash" style={{
          backgroundImage: `url('./images/self.jpg')`
      }}></div>
    </div>
  );
}

export default HomePage;
