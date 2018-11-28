import React, { Component } from 'react';
import { Snow } from './canvas';
import './style.css';

class FrontPage extends Component {
  
  componentDidMount(){
    const canvas = document.getElementById("canvas");
    const snow   = new Snow(canvas);
    snow.setDimention();
    snow.setParticles();
    snow.animate();
  }

  render() {
    return (
      <div className="FrontPage">
          <canvas id="canvas">

          </canvas>
      </div>
    );
  }
}

export default FrontPage;