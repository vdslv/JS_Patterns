class Memento {
  constructor(value) {
    this.value = value;
  }
}

const creator = {
  save: (val) => new Memento(val),
  restore: (memento) => memento.value,
};

class Caretaker {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}

const careTaker = new Caretaker();

careTaker.addMemento(creator.save("hello"));
careTaker.addMemento(creator.save("hello world"));
careTaker.addMemento(creator.save("hello world!!!"));

console.log(creator.restore(careTaker.getMemento(1)));
