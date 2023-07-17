class Counter {
  static counter: number = 0;

  static increment() {
    Counter.counter = Counter.counter + 1;
  }

  static decrement() {
    Counter.counter = Counter.counter - 1;
  }
}

Counter.increment();
console.log(Counter.counter);
Counter.increment();
console.log(Counter.counter);
Counter.decrement();
console.log(Counter.counter);
