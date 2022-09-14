'use strict';

// create object with constructor

// actually use function, but have a different with function normal

// const Person = function (firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// };

// const robi = new Person('Robi', 23);

// Person.prototype.calcAge = function () {
//   console.log(30 - this.age);
// };

// robi.calcAge();

// Person.prototype.status = 'Mahasiswa';

// console.log(robi.hasOwnProperty(status));

// console.log(Person.prototype);
// console.log(robi);

// const angka = [1, 2, 2, 3, 3, 4, 5, 7, 8, 8];

// Array.prototype.unique = function () {
//   return [...new Set(angka)];
// };

// // console.log(Array.unique());
// console.log(Array.prototype.unique());

/** Challenge 1 =========================================================================== */
const Car = function (merk, speed) {
  this.merk = merk;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return (this.speed += 10);
  // console.log(`current speed ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  return (this.speed -= 5);
  // console.log(`current speed ${this.speed}km/h`);
};

const car1 = new Car('BMW', 120);

console.log(car1.merk);
console.log(car1.speed);
console.log(car1.accelerate());
console.log(car1.brake());

const car2 = new Car('Mercedes', 95);
console.log(car2.merk);
console.log(car2.speed);
console.log(car2.accelerate());
console.log(car2.brake());

/** ES6 CLASSES =================================================================== */

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // metode
  // metode di bawah adalah function expression -> calcAge = function( ){}
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  sayHello = function () {
    console.log(`Hello ${this.firstName}`);
  };
}

const asep = new PersonCl('Asep', 1999);

console.log(asep);
asep.calcAge();
asep.sayHello();
