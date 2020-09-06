class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}

const tesla1 = new TeslaCar("S", 50000, false, false);
const tesla1Clone = tesla1.produce();

console.log(tesla1, tesla1Clone);
