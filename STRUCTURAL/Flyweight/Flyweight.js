class Auto {
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  constructor() {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];
    if (model) return model;
    this.models[name] = new Auto(name);
    return this.models[name];
  }
}

const factory = new AutoFactory();

const bmw = factory.create("BMW");
const bmw2 = factory.create("BMW");
const audi = factory.create("AUDI");
const tesla = factory.create("TESLA");
const tesla2 = factory.create("TESLA");

console.log(factory.models);
