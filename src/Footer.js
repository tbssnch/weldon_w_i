import React, { Component } from 'react';
import logo from './assets/logo.png';
import { Image } from 'react-bootstrap';
import './Footer.css';


class Footer extends Component {


  render() {
    return (
      <div id="contact" className="footer-container">
          <h2>Call today and get a free set of coasters with each order!</h2>
          <p>+1 (319) 461-4166</p>
          <p>weldonwoodiron@gmail.com</p>
          <Image className="footer-img" src={logo}/>
      </div>
    );
  }
}

export default Footer;
