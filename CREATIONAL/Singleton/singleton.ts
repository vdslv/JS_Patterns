class Singleton {
  private static instance: Singleton;
  private count: number;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.count = 0;
    Singleton.instance = this;
    return this;
  }

  getCount(): number {
    return this.count;
  }

  increaseCount(): number {
    return this.count++;
  }
}

function clientCode3() {
  const s1 = new Singleton();
  const s2 = new Singleton();

  if (s1 === s2) {
    console.log("Singleton works, both variables contain the same instance.");
  } else {
    console.log("Singleton failed, variables contain different instances.");
  }
}

clientCode3(); // Singleton works, both variables contain the same instance.
