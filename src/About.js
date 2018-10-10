import React, { Component } from 'react';
import { Jumbotron, Image, Col, Row, Clearfix } from 'react-bootstrap';
import bio from './assets/Mitch_Weldon.JPG';
import './About.css';


class About extends Component {


  render() {
    return (
      <div id="about" className="about-container">
        <div className="bio-container">
          <div className="bio">
            <Row>
              <Col xs={12} md={4}>
                <Image className="bio-img center-block" src={bio} circle/>
              </Col>
              <Col xs={12} md={8}>
                <div className="about-text">
                    <h1>About</h1>
                    <p>
                    Mitchell Weldon grew up in a small town in rural Iowa. While he always enjoyed shop classses and building, he decided to pursue a career in agriculture. Life then took him to Pennsylvania and he found himself working as a cabinet builder. His passion for woodworking grew. Pursuing love then took him to Oregon where he married his girl and continued building his business of custom wood projects.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
