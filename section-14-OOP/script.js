'use strict';

// create object with constructor

// actually use function, but have a different with function normal

const Person = function (firstName, age) {
  this.firstName = firstName;
  this.age = age;
};

const robi = new Person('Robi', 23);

Person.prototype.calcAge = function () {
  console.log(30 - this.age);
};

robi.calcAge();

Person.prototype.status = 'Mahasiswa';

console.log(robi.hasOwnProperty(status));

console.log(Person.prototype);
console.log(robi);
