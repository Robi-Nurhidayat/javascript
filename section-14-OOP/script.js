'use strict';

// create object with constructor

// actually use function, but have a different with function normal

const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

const robi = new Person('Robi', 'Nurhidayat');

console.log(robi);
