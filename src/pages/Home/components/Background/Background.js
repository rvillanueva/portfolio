import React from 'react';
import './background.css';
import Sketch from 'react-p5'
import Scene from './scene';
class Background extends React.Component {
  scene = null
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)
    this.scene = new Scene(p5)
  }
  draw = p5 => {
    p5.clear();
    this.scene.update(p5);
    this.scene.draw(p5);
  }
  render() {
    return <div className="background">
      <Sketch setup={this.setup} draw={this.draw} />
    </div>;
  }
}

export default Background;