import React, { Component } from 'react';
import Hero from './Hero';
import About from './About';


class App extends Component {


  render() {
    return (
      <div className="App">
        <Hero />
        <About />
      </div>
    );
  }
}

export default App;
