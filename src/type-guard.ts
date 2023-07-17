// key of guard

type Alphanumeric = string | number;

function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

console.log(add(1, 2));
console.log(add('1', '2'));

// in guard

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: 'admin';
};

const normalUser1: NormalUser = { name: 'Arif' };
const adminUser1: AdminUser = { name: 'Binu', role: 'admin' };

function getUserInfo(user: NormalUser | AdminUser): string {
  if ('role' in user) {
    return `Hey I am ${user.name} and I am a ${user.role} user.`;
  } else {
    return `Hey I am ${user.name} and I am a normal user.`;
  }
}

console.log(getUserInfo(normalUser1));
console.log(getUserInfo(adminUser1));

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log('I making sound');
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeBark() {
    console.log('I am barking');
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makeMeaw() {
    console.log('I am meawing');
  }
}

const animal1 = new Dog('German Sephart', 'Dog');
const animal2 = new Cat('Special Cat', 'cat');

function isDog(animal: Animal): animal is Dog {
  return animal instanceof Dog;
}

function checkAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (animal instanceof Cat) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
}

checkAnimal(animal2);
