import React from "react";
import "./background.css";
import Sketch from "react-p5";

class Particle {
  constructor(x, y, p5) {
    this.p5 = p5;
    this.acceleration = p5.createVector(0, 0);
    this.velocity = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
    this.position = p5.createVector(x, y);
    this.r = 3.0;
    this.maxspeed = 3; // Maximum speed
    this.maxforce = 0.05; // Maximum steering force
  }
  applyForce(force) {
    this.acceleration.add(force);
  }
  run = (particles, p5) => {
    this.flock(particles, p5);
    this.update(p5);
    this.draw(p5);
  };
  flock(particles, p5) {
    let sep = this.separate(particles, p5); // Separation
    let ali = this.align(particles, p5); // Alignment
    let coh = this.cohesion(particles, p5); // Cohesion
    // Arbitrarily weight these forces
    sep.mult(1.5);
    ali.mult(1.0);
    coh.mult(1.0);
    // Add the force vectors to acceleration
    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);
  }
  update = () => {
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // Reset accelertion to 0 each cycle
    this.acceleration.mult(0);
    return this;
  };
  separate = (particles, p5) => {
    let desiredseparation = 25.0;
    let steer = p5.createVector(0, 0);
    let count = 0;
    // For every boid in the system, check if it's too close
    for (let i = 0; i < particles.length; i++) {
      let d = window.p5.Vector.dist(this.position, particles[i].position);
      // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
      if (d > 0 && d < desiredseparation) {
        // Calculate vector pointing away from neighbor
        let diff = window.p5.Vector.sub(this.position, particles[i].position);
        diff.normalize();
        diff.div(d); // Weight by distance
        steer.add(diff);
        count++; // Keep track of how many
      }
    }
    // Average -- divide by how many
    if (count > 0) {
      steer.div(count);
    }

    // As long as the vector is greater than 0
    if (steer.mag() > 0) {
      // Implement Reynolds: Steering = Desired - Velocity
      steer.normalize();
      steer.mult(this.maxspeed);
      steer.sub(this.velocity);
      steer.limit(this.maxforce);
    }
    return steer;
  };
  align(particles, p5) {
    let neighbordist = 50;
    let sum = this.p5.createVector(0, 0);
    let count = 0;
    for (let i = 0; i < particles.length; i++) {
      let d = this.p5.dist(this.position, particles[i].position);
      if (d > 0 && d < neighbordist) {
        sum.add(particles[i].velocity);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      sum.normalize();
      sum.mult(this.maxspeed);
      let steer = window.p5.Vector.sub(sum, this.velocity);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return this.p5.createVector(0, 0);
    }
  }
  cohesion(particles, p5) {
    let neighbordist = 50;
    let sum = this.p5.createVector(0, 0); // Start with empty vector to accumulate all locations
    let count = 0;
    for (let i = 0; i < particles.length; i++) {
      let d = window.p5.Vector.dist(this.position, particles[i].position);
      if (d > 0 && d < neighbordist) {
        sum.add(particles[i].position); // Add location
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      return this.seek(sum); // Steer towards the location
    } else {
      return this.p5.createVector(0, 0);
    }
  }
  seek(target, p5) {
    let desired = window.p5.Vector.sub(target, this.position); // A vector pointing from the location to the target
    // Normalize desired and scale to maximum speed
    desired.normalize();
    desired.mult(this.maxspeed);
    // Steering = Desired minus Velocity
    let steer = window.p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce); // Limit to maximum steering force
    return steer;
  }
  draw = (p5) => {
    const color = p5.color(120);
    p5.fill(color);
    p5.noStroke();
    return p5.circle(
      this.position.x,
      this.position.y,
      1.5 * window.devicePixelRatio
    );
  };
}

class Scene {
  particles = [];
  addParticle(x, y, p5) {
    this.particles.push(new Particle(x, y, p5));
  }
  run = (p5) => {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].run(this.particles, p5);
    }
  };
}

class Background extends React.Component {
  flock = new Scene();
  particles = [];
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
  };
  draw = (p5) => {
    p5.clear();
    while (this.flock.particles.length < 50) {
      this.flock.addParticle(
        Math.round(Math.random() * window.innerWidth),
        Math.round(Math.random() * window.innerHeight),
        p5
      );
    }
    this.flock.run(p5);
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
