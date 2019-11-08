import React from 'react';
import './App.css';
import {HomePage, ContactPage, AboutPage} from './pages';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Overlay} from './components';
import {CSSTransition} from 'react-transition-group';
import portfolioData from './data/portfolioData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isScrolledDown: false,
      isLoaded: false,
      overlayIsOpen: false,
      openProjectId: null
    }
  }
  componentDidMount() {
    const cutoff = 160;
    window.addEventListener('scroll', () => {
      if(window.scrollY > cutoff && !this.state.isScrolledDown) {
        this.setState({
          isScrolledDown: true
        });
      } else if (window.scrollY <= cutoff && this.state.isScrolledDown) {
        this.setState({
          isScrolledDown: false
        });
      }
    });
    this.setState({
      isLoaded: true
    });
  }
  openProjectById = projectId => {
    this.setState({
      overlayIsOpen: true,
      openProjectId: projectId
    })
  }
  closeOverlay = () => {
    this.setState({
      overlayIsOpen: false,
      openProjectId: null
    })
  }
  selectOpenProject = () => {
    return portfolioData.items.filter(item => item._id === this.state.openProjectId)[0] || null;
  }
  render() {
    return (
      <Router className="app">
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={this.state.overlayIsOpen}
          timeout={{
            enter: 200,
            exit: 100
          }}
          classNames="fade-overlay">
          <Overlay project={this.selectOpenProject()} close={this.closeOverlay}/>
        </CSSTransition>
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" render={() => <HomePage isLoaded={this.state.isLoaded} isScrolledDown={this.state.isScrolledDown} openProjectById={this.openProjectById}/>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
