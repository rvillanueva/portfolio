

class Mover {
  constructor(x, y, p5) {
    this.p5 = p5;
    this.acceleration = this.p5.createVector(0, 0);
    this.velocity = this.p5.createVector(0, 0);
    this.position = this.p5.createVector(x, y);
    this.maxspeed = 1;    // Maximum speed
    this.maxforce = 0.05; // Maximum steering force
  }
  update() {
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // Reset accelertion to 0 each cycle
    this.acceleration.mult(0);    
  }
  teleportAcrossScene() {
    this.position = this.p5.createVector(window.innerWidth - this.position.x, window.innerHeight - this.position.y)
  }
  applyForce(force) {
    this.acceleration.add(force);
  }
  getPosition() {
    return this.position;
  }
  isWithinBounds() {
    return this.position.y < window.innerHeight && this.position.y > 0 && this.position.x < window.innerWidth && this.position.x > 0
  }
}

class Infection {
  constructor(disease, immunityRate) {
    this.disease = disease;
    this.infectionRate = disease.infectionRate;
    this.immunityRate = immunityRate;

    this.load = 0.01;
    this.resistance = 0;
  }
  updateVirusStrength(load) {
    this.load = Math.min(load, 1)
  }
  updateResistance(resistance) {
    this.resistance = Math.min(resistance, 1)
  }
  update() {
    this.updateVirusStrength(this.load + this.load *  (0.5 - this.resistance))
    this.updateResistance(this.resistance + Math.random() * 0.03 * this.immunityRate)
  }
}

class Agent extends Mover{
  constructor(id, x, y, p5) {
    super(x, y, p5)
    this.id = id;
    this.position = this.p5.createVector(x, y);
    this.velocity = this.p5.createVector(this.p5.random(-1, 1), this.p5.random(-1, 1));
    this.maxspeed = 0.4;    // Maximum speed
    this.maxforce = 0.05; // Maximum steering force
    this.infection = null;
    this.immuneSystemStrength = Math.random()
    this.r = 2 * Math.random() * 4
  }
  decrementSize() {
    this.size -= 1;
  }
  incrementSize() {
    this.size += 1;
  }
  infect(disease) {
    if(!this.infection) {
      const immunityRate = this.immuneSystemStrength - (Math.random() * 0.2)
      this.infection = new Infection(disease, immunityRate);  
    }
  }
  checkOverlap(x, y, r) {
    const bufferedR = Math.max(Math.abs(r  - this.r), 1)
    const leftBound = this.position.x - bufferedR;
    const rightBound = this.position.x + bufferedR;
    const topBound = this.position.y + bufferedR;
    const bottomBound = this.position.y - bufferedR;
    return x >= leftBound && x <= rightBound && y <= topBound && y >= bottomBound;
  }
  update() {
    super.update()
    if (this.infection) this.infection.update();
  }
  draw() {
    let color = this.p5.color(240)
    if(this.infection) {
      const healthyColor = this.p5.color(240);
      const infectedColor = this.p5.color(239, 152, 152);
      color = this.p5.lerpColor(healthyColor, infectedColor, this.infection.load);  
    }
    /*
    let theta = this.velocity.heading() + this.p5.radians(90);
    this.p5.push();
    this.p5.translate(this.position.x, this.position.y);
    this.p5.rotate(theta);
    this.p5.beginShape();
    this.p5.vertex(0, -this.r * 0.8);
    this.p5.vertex(-this.r, this.r * 1.2);
    this.p5.vertex(this.r, this.r * 1.2);
    this.p5.endShape(this.p5.CLOSE);
    this.p5.pop()
    */
    this.p5.fill(color)
    this.p5.noStroke();
   return this.p5.circle(this.position.x, this.position.y, this.r * window.devicePixelRatio)
  }
}

class Disease {
  constructor() {
    this.infectionRate = Math.random()
  }
}
class Virus extends Mover{
  constructor(id, disease, x, y, p5) {
    super(x, y, p5)
    this.id = id;
    this.velocity = this.p5.createVector(this.p5.random(-1, 1), this.p5.random(-1, 1));
    this.maxspeed = 0.7;    // Maximum speed
    this.maxforce = 0.05; // Maximum steering force
    this.lightTimer = 0;
    this.lightDuration = 200;
    this.destination = null;
    this.r = 1.5;
    this.energy = 100
    this.totalEnergy = 100
    this.disease = disease;
  }
  setDestination(node) {
    this.destination = node;
  }
  light() {
    if(this.lightTimer !== 0) return;
    this.lightTimer++;
  }
  update = () => {
    super.update()
    this.energy -= 1
  }
  draw = (p5) => {
    const lifePercent = this.energy / this.totalEnergy;
    const unlitColor = this.p5.color(255);
    const litColor = this.p5.color(200);
    const color = this.p5.lerpColor(unlitColor, litColor, lifePercent);
    this.p5.fill(color);
    this.p5.noStroke();
    return this.p5.circle(this.position.x, this.position.y, this.r * window.devicePixelRatio)
  }
}

export default class Scene {
  viruses = []
  agents = []
  virusCounter = 0;
  agentCounter = 0;
  constructor(p5) {
    this.p5 = p5;
  }
  addVirus(disease, x, y) {
    const virus = new Virus(this.agentCounter, disease, x, y, this.p5)
    this.viruses.push(virus);
    this.virusCounter ++;
    return virus;
  }
  addAgent(x,y) {
    const agent = new Agent(this.nodeCounter, x, y, this.p5)
    this.agents.push(agent);
    this.agentCounter ++;
    return agent;
  }
  selectRandomAgent() {
    return this.agents[Math.round(Math.random() * (this.agents.length - 1))]
  }
  releaseViruses() {
    this.agents.forEach(agent => {
      if(Math.random() < 0.003) {
        this.addVirus(agent.position.x, agent.position.y, this.p5);
      }
    })
  }
  infectAgents() {
    this.agents.forEach(agent => {
      if(!agent.infection && Math.random() < 0.0005) {
        const disease = new Disease(agent.position.x, agent.position.y)
        agent.infect(disease)
      }
    })
  }
  teleportElementIfNeeded(element) {
    if (!element.isWithinBounds()) element.teleportAcrossScene()
  }
  clearDeadViruses() {
    this.viruses = this.viruses.filter(virus => virus.energy > 0)
  }
  update = (p5) => {
    while(this.agents.length < 60) {
      this.addAgent(Math.round(Math.random() * window.innerWidth), Math.round(Math.random() * window.innerHeight), p5)
    }
    if(Math.random() < 0.015 && this.viruses.length > 0) {
      this.viruses[Math.floor(Math.random() * this.viruses.length)].light();
    }
    this.agents.forEach(agent => agent.update());
    this.viruses.forEach(virus => virus.update());
    this.clearDeadViruses()
    this.releaseViruses()
    this.agents.forEach(this.teleportElementIfNeeded)
    this.viruses.forEach(this.teleportElementIfNeeded)
    this.infectAgents();
    this.updateInfections();
  }
  releaseNewViruses() {
    this.agents.forEach(agent => {
      if(agent.size > 0 && this.viruses.length < 40 && Math.random() > 0.0015) {
        this.releaseVirusFromAgent(agent, this.p5)
      }
    })
  }
  removeAgent(agent) {
    this.agents = this.agents.filter(a => a.id !== agent.id)
  }
  updateInfections() {
    this.viruses.forEach(virus => {
      this.agents.forEach(agent => {
        if (agent.checkOverlap(virus.position.x, virus.position.y, virus.r)) {
          agent.infect(virus);
        }
      })
    })
  }
  mergeAgentsAtDestination() {
    const agentsToRemove = [];
    this.agents.forEach(agent => {
      const hasReached = agent.destination.checkOverlap(agent.position.x, agent.position.y, agent.r);
      if(hasReached) {
        agentsToRemove.push(agent);
        agent.destination.incrementSize();
      }
    })
    agentsToRemove.forEach(agent => this.removeAgent(agent))
  }
  draw = (p5) => {
    this.agents.forEach(agent => agent.draw(p5));
    this.viruses.forEach(virus => virus.draw(p5))
  }
}
