# DESIGN PATTERNS

<b>Design patterns</b> are typical solutions to commonly occurring problems in software design. They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.

You can’t just find a pattern and copy it into your program, the way you can with off-the-shelf functions or libraries. The pattern is not a specific piece of code, but a general concept for solving a particular problem. You can follow the pattern details and implement a solution that suits the realities of your own program.

Patterns are often confused with algorithms, because both concepts describe typical solutions to some known problems. While an algorithm always defines a clear set of actions that can achieve some goal, a pattern is a more high-level description of a solution. The code of the same pattern applied to two different programs may be different.

An analogy to an algorithm is a cooking recipe: both have clear steps to achieve a goal. On the other hand, a pattern is more like a blueprint: you can see what the result and its features are, but the exact order of implementation is up to you.

## Creational patterns
These patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

### Abstract Factory
```
Abstract Factory is a creational design pattern that lets you produce 
families of related objects without specifying their concrete classes.
```
<details><summary><b>JavaScript Example</b></summary>
<p>
    
```js
function bmwProducer(kind) {
  return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

function sportCarFactory() {
	return new Z4();
}

function familyCarFactory() {
	return new I3();
}

class Z4 {
	info() {
		return "Z4 is a Sport car!";
	}
}

class I3 {
	info() {
		return "i3 is a Family car!";
	}
}

const produce = bmwProducer('sport');

const myCar = new produce();

console.log(myCar.info());
```
</p>
</details>

### Factory method
```
Factory Method is a creational design pattern that provides an interface 
for creating objects in a superclass, but allows subclasses to alter the 
type of objects that will be created.
```
<details><summary><b>JavaScript Example</b></summary>
<p>
    
```js
class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BmwFactory {
  static create(type) {
    if (type === "X5") return new Bmw(type, 108000, 300);
    if (type === "X6") return new Bmw(type, 111000, 320);
  }
}

const x5 = BmwFactory.create("X5");
const x6 = BmwFactory.create("X6");

console.log(x5);

console.log(x6);
```
</p>
</details>

### Builder
```
Builder is a creational design pattern that lets you construct complex 
objects step by step. The pattern allows you to produce different 
types and representations of an object using the same construction code.
```
<details><summary><b>JavaScript Example</b></summary>
<p>
    
```js
class Car {
  constructor() {
    this.autoPilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
  }

  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }

  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
}

const newCar = new CarBuilder()
  .addAutoPilot("someAutoPilot")
  .addParktronic("someParktronic")
  .build();
console.log(newCar); // { autoPilot: undefined, parktronic: undefined, signaling: false }
```
</p>
</details>

### Prototype
```
Prototype is a creational design pattern that lets you copy 
existing objects without making your code dependent on their 
classes.


```
<details><summary><b>JavaScript Example</b></summary>
<p>
    
```js
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
```
</p>
</details>

### Singleton
```
Singleton is a creational design pattern that lets you ensure that 
a class has only one instance, while providing a global access 
point to this instance.


```
<details><summary><b>JavaScript Example</b></summary>
<p>
    
```js
const Counter = (() => {
  let instance = null;
  count = 0;
  return class {
    constructor() {
      if (instance) {
        return instance;
      }
      this.count = 0;
      instance = this;
      return this;
    }

    getCount() {
      return this.count;
    }

    increaseCount() {
      return this.count++;
    }
  };
})();

const myCount1 = new Counter();

myCount1.increaseCount();
myCount1.increaseCount();
myCount1.increaseCount();
myCount1.increaseCount();

const myCount2 = new Counter();

console.log(myCount2.getCount());

myCount2.increaseCount();
myCount2.increaseCount();

console.log(myCount1.getCount());
```
</p>
</details>

