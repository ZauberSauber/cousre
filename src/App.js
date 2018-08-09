import React, { Component } from 'react';

import NextBtn from './components/buttons/nextBtn';
import './App.css';

class App extends Component {
  state = { toggle: true };
  toggleToggle = () => this.setState({ toggle: !this.state.toggle });
  render() {
    const { toggle } = this.state;
    return (
      <div className="App">
        <NextBtn name="next"/>
      </div>
    );
  }
}


export default App;
