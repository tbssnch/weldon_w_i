import React, { Component } from 'react';
import Hero from './Hero';
import About from './About';
import Work from './Work';


class App extends Component {


  render() {
    return (
      <div className="App">
        <Hero />
        <About />
        <Work />
      </div>
    );
  }
}

export default App;
