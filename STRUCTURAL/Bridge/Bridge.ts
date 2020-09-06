class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction: Base operation with:\n${result}`;
  }
}

class ExtendedAbstraction extends Abstraction {
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
}

interface Implementation {
  operationImplementation(): string;
}

class ConcreteImplementationA implements Implementation {
  public operationImplementation(): string {
    return "ConcreteImplementationA: Here's the result on the platform A.";
  }
}

class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
    return "ConcreteImplementationB: Here's the result on the platform B.";
  }
}

function clientCode9(abstraction: Abstraction) {
  console.log(abstraction.operation());
}

let abstraction = new Abstraction(new ConcreteImplementationA());
clientCode9(abstraction);

console.log("");

abstraction = new ExtendedAbstraction(new ConcreteImplementationB());
clientCode9(abstraction);

// Abstraction: Base operation with:
// ConcreteImplementationA: Here's the result on the platform A.

// ExtendedAbstraction: Extended operation with:
// ConcreteImplementationB: Here's the result on the platform B.
