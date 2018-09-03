import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { routes } from './routing/routes';

import Footer from './components/footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className={'page-container'}></div>
          <Router>
              <div>
                  <ul>
                      <li>
                          <Link to="/chapter1/page1_1">page 1</Link>
                      </li>
                      <li>
                          <Link to="/chapter2/page2_1">page 2</Link>
                      </li>
                  </ul>
                  {routes.map((route, index)=> {
                      return (
                          <Route
                              key={index}
                              path={route.path}
                              component={route.component}
                          />
                      )}
                  )}

                  <Footer/>
              </div>
          </Router>

      </div>
    );
  }
}


export default App;
