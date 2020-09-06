class ArrayIterator {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

const autos1 = [
  { model: "Audi", color: "black", price: "20000" },
  { model: "BMW", color: "white", price: "30000" },
  { model: "Tesla", color: "gray", price: "40000" },
];

const collection1 = new ArrayIterator(autos1);

while (collection1.hasNext()) {
  console.log(collection1.next());
}

class ObjectIterator {
  constructor(el) {
    this.index = 0;
    this.keys = Object.keys(el);
    this.elements = el;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

const autos2 = {
  audi: { model: "Audi", color: "black", price: "20000" },
  bmw: { model: "BMW", color: "white", price: "30000" },
  tesla: { model: "Tesla", color: "gray", price: "40000" },
};

const collection2 = new ObjectIterator(autos2);

while (collection2.hasNext()) {
  console.log(collection2.next());
}
