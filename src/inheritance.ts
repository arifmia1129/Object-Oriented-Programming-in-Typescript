// class PersonInfo {
//   name: string;
//   age: number;
//   address: string;

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   makeSleep(hours: number): string {
//     return `This ${this.name} will make sleep ${hours} hours.`;
//   }
// }

// class Student extends PersonInfo {
//   constructor(name: string, age: number, address: string) {
//     super(name, age, address);
//   }
// }

// const student1 = new Student('Ariba', 12, 'Gobindaganj, Gaibandha');

// console.log(student1.makeSleep(8));

// class Teacher extends PersonInfo {
//   designation: string;

//   constructor(name: string, age: number, address: string, designation: string) {
//     super(name, age, address);
//     this.designation = designation;
//   }

//   takeClasses(numberOfClass: number): string {
//     return `This ${this.name} take ${numberOfClass} classes in everyday`;
//   }
// }

// const teacher1 = new Teacher(
//   'Arif',
//   23,
//   'Gobindaganj, Gaibandha',
//   'Computer Teacher'
// );

// console.log(teacher1.takeClasses(7));
