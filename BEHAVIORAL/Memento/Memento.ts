class Originator {
  private state: string;

  constructor(state: string) {
    this.state = state;
    console.log(`Originator: My initial state is: ${state}`);
  }

  public doSomething(): void {
    console.log("Originator: I'm doing something important.");
    this.state = this.generateRandomString(30);
    console.log(`Originator: and my state has changed to: ${this.state}`);
  }

  private generateRandomString(length: number = 10): string {
    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return Array.apply(null, { length })
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join("");
  }

  public save(): Memento {
    return new ConcreteMemento(this.state);
  }

  public restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Originator: My state has changed to: ${this.state}`);
  }
}

interface Memento {
  getState(): string;

  getName(): string;

  getDate(): string;
}

class ConcreteMemento implements Memento {
  private state: string;

  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace("T", " ");
  }

  public getState(): string {
    return this.state;
  }

  public getName(): string {
    return `${this.date} / (${this.state.substr(0, 9)}...)`;
  }

  public getDate(): string {
    return this.date;
  }
}

class Caretaker {
  private mementos: Memento[] = [];

  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  public backup(): void {
    console.log("\nCaretaker: Saving Originator's state...");
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    if (!this.mementos.length) {
      return;
    }
    const memento = this.mementos.pop();

    console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
    this.originator.restore(memento);
  }

  public showHistory(): void {
    console.log("Caretaker: Here's the list of mementos:");
    for (const memento of this.mementos) {
      console.log(memento.getName());
    }
  }
}

const originator = new Originator("Super-duper-super-puper-super.");
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

console.log("");
caretaker.showHistory();

console.log("\nClient: Now, let's rollback!\n");
caretaker.undo();

console.log("\nClient: Once more!\n");
caretaker.undo();

// Originator: My initial state is: Super-duper-super-puper-super.

// Caretaker: Saving Originator's state...
// Originator: I'm doing something important.
// Originator: and my state has changed to: qXqxgTcLSCeLYdcgElOghOFhPGfMxo

// Caretaker: Saving Originator's state...
// Originator: I'm doing something important.
// Originator: and my state has changed to: iaVCJVryJwWwbipieensfodeMSWvUY

// Caretaker: Saving Originator's state...
// Originator: I'm doing something important.
// Originator: and my state has changed to: oSUxsOCiZEnohBMQEjwnPWJLGnwGmy

// Caretaker: Here's the list of mementos:
// 2019-02-17 15:14:05 / (Super-dup...)
// 2019-02-17 15:14:05 / (qXqxgTcLS...)
// 2019-02-17 15:14:05 / (iaVCJVryJ...)

// Client: Now, let's rollback!

// Caretaker: Restoring state to: 2019-02-17 15:14:05 / (iaVCJVryJ...)
// Originator: My state has changed to: iaVCJVryJwWwbipieensfodeMSWvUY

// Client: Once more!

// Caretaker: Restoring state to: 2019-02-17 15:14:05 / (qXqxgTcLS...)
// Originator: My state has changed to: qXqxgTcLSCeLYdcgElOghOFhPGfMxo
