import React, { Component } from 'react';
import { Jumbotron, Image, Col, Row, Clearfix } from 'react-bootstrap';
import bio from './assets/hero_img.jpg';
import './About.css';


class About extends Component {


  render() {
    return (
      <div className="about-container">
        <h1>About</h1>
        <div className="bio-container">
          <div className="bio">
            <Row>
              <Col xs={12} md={4}>
                <Image className="bio-img center-block" src={bio} circle/>
              </Col>
              <Col xs={12} md={8}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
