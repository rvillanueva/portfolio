import React from 'react';
import './background.css';
import Sketch from 'react-p5'

class Firefly {
  constructor(x, y, p5) {
    this.acceleration = p5.createVector(0, 0);
    this.velocity = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
    this.position = p5.createVector(x, y);
    this.r = 3.0;
    this.maxspeed = 0.7;    // Maximum speed
    this.maxforce = 0.05; // Maximum steering force
    this.lightTimer = 0;
    this.lightDuration = 200;
  }
  applyForce(force) {
    this.acceleration.add(force);
  }
  light() {
    if(this.lightTimer !== 0) return;
    this.lightTimer++;
  }
  update = (p5) => {
    const gravity = p5.createVector(0, 0);
    this.applyForce(gravity)
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // Reset accelertion to 0 each cycle
    this.acceleration.mult(0);
    if(this.lightTimer > 0) {
      this.lightTimer++;
    }
    if(this.lightTimer > this.lightDuration) {
      this.lightTimer = 0;
    }
    return this;
  }
  draw = (p5) => {
    const lightPercent = this.lightTimer / this.lightDuration;
    const unlitColor = p5.color(210);
    const litColor = p5.color(66, 42, 0);
    const lightIntensity = lightPercent < 0.5 ? lightPercent * 2 : (1 - lightPercent) * 2;
    const color = p5.lerpColor(unlitColor, litColor, lightIntensity);
    p5.fill(color);
    p5.noStroke();
    return p5.circle(this.position.x, this.position.y, 1.5)
  }
}

class Scene {
  particles = []
  addParticle(x, y, p5) {
    this.particles.push(new Firefly(x, y, p5));
  }
  update = (p5) => {
    this.clearFallenParticles();
    this.particles = this.particles.map(particle => particle.update(p5));
  }
  clearFallenParticles() {
    this.particles = this.particles.filter(particle => particle.position.y < window.innerHeight && particle.position.x < window.innerWidth);
  }
  draw = (p5) => {
    this.particles.forEach(particle => particle.draw(p5));
  }
}

class Background extends React.Component {
  flock = new Scene()
  particles = []
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)
  }
  draw = p5 => {
    p5.clear();
    while(this.flock.particles.length < 15) {
      this.flock.addParticle(Math.round(Math.random() * window.innerWidth), Math.round(Math.random() * window.innerHeight), p5);
    }
    if(Math.random() < 0.015) {
      this.flock.particles[Math.floor(Math.random() * this.flock.particles.length)].light();
    }
    this.flock.update(p5);
    this.flock.draw(p5);
  }
  render() {
    return <div className="background">
      <Sketch setup={this.setup} draw={this.draw} />
    </div>;
  }
}

export default Background;