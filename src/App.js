import React from 'react';
import './App.css';
import {HomePage, ProjectPage} from './pages';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isScrolledDown: false,
      isLoaded: false
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
  render() {
    return (
      <Router className="app">
        <Switch>
          <Route path="/portfolio/:projectId" component={ProjectPage} />
          <Route path="/" render={() => <HomePage isLoaded={this.state.isLoaded} isScrolledDown={this.state.isScrolledDown}/>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
