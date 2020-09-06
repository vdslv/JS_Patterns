abstract class Component {
  protected parent: Component;

  public setParent(parent: Component) {
    this.parent = parent;
  }

  public getParent(): Component {
    return this.parent;
  }

  public add(component: Component): void {}

  public remove(component: Component): void {}

  public isComposite(): boolean {
    return false;
  }

  public abstract operation(): string;
}

class Leaf extends Component {
  public operation(): string {
    return "Leaf";
  }
}

class Composite1 extends Component {
  protected children: Component[] = [];

  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);

    component.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  public operation(): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.operation());
    }

    return `Branch(${results.join("+")})`;
  }
}

function clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}`);
}

const simple = new Leaf();
console.log("Client: I've got a simple component:");
clientCode(simple);
console.log("");

const tree = new Composite1();
const branch1 = new Composite1();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite1();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
console.log("Client: Now I've got a composite tree:");
clientCode(tree);
console.log("");

function clientCode7(component1: Component, component2: Component) {
  if (component1.isComposite()) {
    component1.add(component2);
  }
  console.log(`RESULT: ${component1.operation()}`);
}

console.log(
  "Client: I don't need to check the components classes even when managing the tree:"
);
clientCode7(tree, simple);

// Client: I've got a simple component:
// RESULT: Leaf

// Client: Now I've got a composite tree:
// RESULT: Branch(Branch(Leaf+Leaf)+Branch(Leaf))

// Client: I don't need to check the components classes even when managing the tree:
// RESULT: Branch(Branch(Leaf+Leaf)+Branch(Leaf)+Leaf)
