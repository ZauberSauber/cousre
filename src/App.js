import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { routes } from './routing/routes';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Footer from './components/footer';

import './App.styl';
import './animations.styl';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className={'page-container'}></div>
          <Router>
              <Route
                  render={({ location }) => (
                      <div>
                          <ul>
                              <li>
                                  <Link to="/chapter1/page1_1">page 1</Link>
                              </li>
                              <li>
                                  <Link to="/chapter2/page2_1">page 2</Link>
                              </li>
                          </ul>
                          <TransitionGroup>
                              <CSSTransition
                                  key={location.key}
                                  classNames='fade'
                                  timeout={300}
                              >
                                  <Switch location={location}>
                                      {routes.map((route, index)=> {
                                          return (
                                              <Route
                                                  key={index}
                                                  path={route.path}
                                                  component={route.component}
                                              />
                                          )}
                                      )}
                                  </Switch>

                              </CSSTransition>
                          </TransitionGroup>
                          <Footer/>
                      </div>
                  )}
              />
          </Router>
      </div>
    );
  }
}


export default App;
