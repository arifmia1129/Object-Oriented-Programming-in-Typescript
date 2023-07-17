class Person {
  takeNap() {
    console.log(`I am sleeping 8 hours per day`);
  }
}

class Student extends Person {
  takeNap(): void {
    console.log('I am sleeping 10 hours per day');
  }
}

class Developer extends Person {
  takeNap(): void {
    console.log('I am sleeping 6 hours per day');
  }
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

function getNapInfo(info: Person) {
  info.takeNap();
}

getNapInfo(person1);
getNapInfo(person2);
getNapInfo(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

function getShapeArea(shape: Shape): void {
  console.log(shape.getArea());
}

getShapeArea(new Circle(10));
getShapeArea(new Rectangle(10, 12));
