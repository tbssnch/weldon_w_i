import React, { Component } from 'react';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Navigation from './Navigation';
import Footer from './Footer';


class App extends Component {


  render() {
    return (
      <div className="App">
        <Navigation />
        <Hero />
        <About />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
