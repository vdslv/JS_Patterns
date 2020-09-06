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
