import React from "react";
import "./background.css";
import Sketch from "react-p5";

class Particle {
  constructor(x, y, r, p5) {
    this.position = p5.createVector(x, y);
    this.velocity = p5.createVector(4, 3).mult(Math.pow(r, 2)).div(200);
    this.r = r;
    this.life = 0;
  }
  incrementLife() {
    if (this.life < 1) this.life += 0.005;
  }
  run(p5) {
    this.incrementLife();
    this.update();
    this.draw(p5);
  }
  update() {
    this.position.add(this.velocity);
  }
  draw = (p5) => {
    const bottomColor = p5.color(245, 192, 118);
    const topColor = p5.color(156, 118, 214);
    const percent = Math.max(
      Math.min((this.position.y + 100) / window.innerHeight, 1),
      0
    );
    const baseColor = p5.lerpColor(topColor, bottomColor, percent);
    const color = p5.lerpColor(p5.color(255), baseColor, this.life);
    p5.fill(color);
    p5.noStroke();
    return p5.circle(
      this.position.x,
      this.position.y,
      this.r * window.devicePixelRatio
    );
  };
}

class Scene {
  particles = [];
  addParticle(x, y, r, p5) {
    this.particles.push(new Particle(x, y, r, p5));
  }
  clearParticles() {
    this.particles = this.particles.filter(({ position }) => {
      const { x, y } = position;
      if (x > window.innerWidth) return false;
      if (x < 0) return false;
      if (y > window.innerHeight) return false;
      if (y < 0) return false;
      return true;
    });
  }
  run = (p5) => {
    this.clearParticles();
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].run(p5);
    }
  };
}

class Background extends React.Component {
  scene = new Scene();
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
  };
  draw = (p5) => {
    p5.clear();
    const multiplier = (window.innerWidth * window.innerHeight) / 20000;
    const needsMoreParticles =
      this.scene.particles.length < Math.round(multiplier);
    if (needsMoreParticles) {
      this.scene.addParticle(
        Math.round(Math.random() * window.innerWidth),
        Math.round(Math.random() * window.innerHeight),
        Math.random() * 3,
        p5
      );
    }
    this.scene.run(p5);
  };
  render() {
    return (
      <div className="background">
        <Sketch setup={this.setup} draw={this.draw} />
      </div>
    );
  }
}

export default Background;
