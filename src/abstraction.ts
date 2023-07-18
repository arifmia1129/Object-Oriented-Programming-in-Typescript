// interface IVehicle {
//   name: string;
//   model: string;
// }

// const vehicle1: IVehicle = {
//   name: 'Car',
//   model: '2023',
// };

// abstraction by using interface

interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public model: string,
    public price: number
  ) {}

  startEngine(): void {
    console.log('Staring engine.....');
  }

  stopEngine(): void {
    console.log('Stopping engine.....');
  }

  move(): void {
    console.log('Moving car....');
  }

  test() {
    console.log('This method use for testing purpose.');
  }
}

const vehicle1 = new Vehicle('Toyota', 'T2022', 2000);

// abstract class

abstract class PersonInfo {
  constructor(public name: string, public age: number) {}

  abstract sayName(): void;
  abstract sayAge(): void;
}

class EmployeeInformation extends PersonInfo {
  sayName(): void {
    console.log(`My name is ${this.name}`);
  }

  sayAge(): void {
    console.log(`My age is ${this.age} year old`);
  }
}
