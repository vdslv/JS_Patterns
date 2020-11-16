# DESIGN PATTERNS

<b>Design patterns</b> are typical solutions to commonly occurring problems in software design. They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.

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

