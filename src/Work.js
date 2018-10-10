import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import './Work.css';
import bench from './assets/weldon_wood1.jpg';
import chairs from './assets/weldon_wood2.jpg';
import table from './assets/weldon_wood4.jpg';
import worker from './assets/weldon_wood6.jpg';



class Work extends Component {


  render() {
    return (
      <div className="work-container">
        <h1>Work</h1>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={bench} />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={1200} alt="900x500" src={chairs} />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={table} />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={worker} />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
    );
  }
}

export default Work;
