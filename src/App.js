import React, { Component } from 'react';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Navigation from './Navigation';


class App extends Component {


  render() {
    return (
      <div className="App">
        <Navigation />
        <Hero />
        <About />
        <Work />
      </div>
    );
  }
}

export default App;
