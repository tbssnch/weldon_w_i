import React, { Component } from 'react';
import { Jumbotron, Image, Col, Row, Clearfix } from 'react-bootstrap';
import logo from './assets/logo.png';
import './Hero.css';


class Hero extends Component {


  render() {
    return (
      <div className="App">
        <Jumbotron className="hero">
          <div className="overlay">
            <Row>
              <Col sm={12}>
                <Image className="hero-img" src={logo}/>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
          </div>
        </Jumbotron>

      </div>
    );
  }
}

export default Hero;
