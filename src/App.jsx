import React from "react";
import "./App.css";
import { HomePage, ContactPage } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Overlay, Drawer, Navbar } from "./components";
import { CSSTransition } from "react-transition-group";
import portfolioData from "./data/portfolioData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isScrolledDown: false,
      isLoaded: false,
      loadBackground: false,
      loadPortfolio: false,
      overlayIsOpen: false,
      openProjectId: null,
      drawerIsOpen: false,
    };
  }
  rewriteUrl() {
    const url = new URL(window.location);
    if (url.pathname.indexOf("index.html") > 0) {
      window.location = "/";
    }
  }
  componentDidMount() {
    this.rewriteUrl();
    const cutoff = 160;
    window.addEventListener("scroll", () => {
      if (window.scrollY > cutoff && !this.state.isScrolledDown) {
        this.setState({
          isScrolledDown: true,
        });
      } else if (window.scrollY <= cutoff && this.state.isScrolledDown) {
        this.setState({
          isScrolledDown: false,
        });
      }
    });
    setTimeout(
      () =>
        this.setState({
          loadBackground: true,
        }),
      1000,
    );
    setTimeout(
      () =>
        this.setState({
          loadPortfolio: true,
        }),
      750,
    );
    this.setState({
      isLoaded: true,
    });
  }
  openProjectById = (projectId) => {
    this.setState({
      overlayIsOpen: true,
      openProjectId: projectId,
    });
  };
  closeOverlay = () => {
    this.setState({
      overlayIsOpen: false,
      openProjectId: null,
    });
  };
  selectOpenProject = () => {
    return (
      portfolioData.items.filter(
        (item) => item._id === this.state.openProjectId,
      )[0] || null
    );
  };
  toggleDrawer = (bool) => {
    this.setState({
      drawerIsOpen: typeof bool === "boolean" ? bool : !this.state.drawerIsOpen,
    });
  };
  render() {
    return (
      <Router className="app">
        <Navbar
          toggleDrawer={this.toggleDrawer}
          isScrolledDown={this.state.isScrolledDown}
        />
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={this.state.overlayIsOpen}
          timeout={{
            enter: 200,
            exit: 100,
          }}
          classNames="fade-overlay"
        >
          <Overlay
            project={this.selectOpenProject()}
            close={this.closeOverlay}
          />
        </CSSTransition>
        <Drawer
          isOpen={this.state.drawerIsOpen}
          close={() => this.toggleDrawer(false)}
        />
        <div className="page-content">
          <Switch>
            <Route path="/contact" component={ContactPage} />
            <Route
              path="/"
              render={() => (
                <HomePage
                  isLoaded={this.state.isLoaded}
                  isScrolledDown={this.state.isScrolledDown}
                  openProjectById={this.openProjectById}
                  loadBackground={this.state.loadBackground}
                  loadPortfolio={this.state.loadPortfolio}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
