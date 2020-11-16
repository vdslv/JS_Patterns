# DESIGN PATTERNS

<b>Design patterns</b> are typical solutions to commonly occurring problems in software design. They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.

## Creational patterns
These patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

### Abstract Factory
```
Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
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
