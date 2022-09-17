'use strict';

// // create object with constructor

// // actually use function, but have a different with function normal

// // const Person = function (firstName, age) {
// //   this.firstName = firstName;
// //   this.age = age;
// // };

// // const robi = new Person('Robi', 23);

// // Person.prototype.calcAge = function () {
// //   console.log(30 - this.age);
// // };

// // robi.calcAge();

// // Person.prototype.status = 'Mahasiswa';

// // console.log(robi.hasOwnProperty(status));

// // console.log(Person.prototype);
// // console.log(robi);

// // const angka = [1, 2, 2, 3, 3, 4, 5, 7, 8, 8];

// // Array.prototype.unique = function () {
// //   return [...new Set(angka)];
// // };

// // // console.log(Array.unique());
// // console.log(Array.prototype.unique());

// /** Challenge 1 =========================================================================== */
// const Car = function (merk, speed) {
//   this.merk = merk;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   return (this.speed += 10);
//   // console.log(`current speed ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   return (this.speed -= 5);
//   // console.log(`current speed ${this.speed}km/h`);
// };

// const car1 = new Car('BMW', 120);

// console.log(car1.merk);
// console.log(car1.speed);
// console.log(car1.accelerate());
// console.log(car1.brake());

// const car2 = new Car('Mercedes', 95);
// console.log(car2.merk);
// console.log(car2.speed);
// console.log(car2.accelerate());
// console.log(car2.brake());

// /** ES6 CLASSES =================================================================== */

// // class PersonCl {
// //   constructor(firstName, birthYear) {
// //     this.firstName = firstName;
// //     this.birthYear = birthYear;
// //   }

// //   // metode
// //   // metode di bawah adalah function expression -> calcAge = function( ){}
// //   calcAge() {
// //     console.log(2023 - this.birthYear);
// //   }

// //   sayHello = function () {
// //     console.log(`Hello ${this.firstName}`);
// //   };
// // }

// // const asep = new PersonCl('Asep', 1999);

// // console.log(asep);
// // asep.calcAge();
// // asep.sayHello();

// /** GETTER AND SETTER ============================================================================ */
// // class Animal {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }

// //   // setter and getter,
// //   // usually use prefix set and get

// //   set name(name) {
// //     if (name.includes(' ')) {
// //       this._name = name;
// //     } else {
// //       alert('Name not include space ');
// //     }
// //   }

// //   get name() {
// //     return this._name;
// //   }

// //   static hey() {
// //     console.log('ini adalah static, static tidak diwarisi pada instance');
// //   }
// // }

// // const cat = new Animal('cat', 30);
// // cat.name = 'cat as';
// // console.log(cat.name);

// // console.log(cat);

// /** OBJECT.CREATE */

// // const ObjectCreate = {
// //   init(name, birthYear) {
// //     this.name = name;
// //     this.birthYear = birthYear;
// //   },

// //   calcAge() {
// //     console.log(`age is ${2022 - this.birthYear}`);
// //   },
// // };

// // const adi = Object.create(ObjectCreate);

// // adi.init('Adi', 1999);

// // adi.calcAge();

// // Challenge 2

// class Car2 {
//   constructor(merk, speed) {
//     this.merk = merk;
//     this.speed = speed;
//   }

//   accelerate() {
//     return (this._speed += 10);
//   }

//   brake() {
//     return (this._speed -= 5);
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
// }

// const mustang = new Car2('Mustang', 120);

// // console.log(mustang.accelerate());

// console.log(mustang.speedUS);
// mustang.speedUS = 50;
// console.log(mustang);

// const Person = function (firstName, birtYear) {
//   this.firstName = firstName;
//   this.birtYear = birtYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birtYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.takeCourse = function () {
//   console.log(`I take course ${this.course} with instructor is jonas`);
// };

// const aji = new Student('aji', 1999, 'Java');

// console.log(aji);

// aji.calcAge();

// console.log(aji.__proto__);
// console.log(aji.__proto__.__proto__);
// console.log(aji.prototype);

// console.log(aji instanceof Person);
// console.log(aji instanceof Student);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

/**Challenge 3 */

// const Car = function (merk, speed) {
//   this.merk = merk;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;

//   console.log(`Tesla going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 20;
//   this.charge = this.charge + 1;

//   console.log(
//     `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const Ev = function (merk, speed, charge) {
//   Car.call(this, merk, speed);
//   this.charge = charge;
// };

// Ev.prototype = Object.create(Car.prototype);
// Ev.prototype.accelerate = function () {
//   this.speed = this.speed + 20;
//   this.charge = this.charge - 1;

//   console.log(
//     `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };
// Ev.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// const tesla = new Ev('Tesla', 120, 23);

// console.log(tesla);

// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);
// tesla.accelerate();
// tesla.brake();

/** ES6 inheritance ======================================================== */
// class Animal {
//   constructor(nama, birthYear) {
//     this.nama = nama;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(`is animal ${2030 - this.birthYear}`);
//   }
// }

// class Cat extends Animal {
//   constructor(nama, birthYear, color) {
//     super(nama, birthYear);
//     this.color = color;
//   }
// }

// const kucing = new Cat('Kucing', 1999, 'blue');

// console.log(kucing);
// kucing.calcAge();

/** Object.create inharitance ================================================ */

const Food = {
  calcPrice: function () {
    console.log(`harga ${this.harga * this.jumlah}`);
  },

  init(nama, harga, jumlah) {
    this.nama = nama;
    this.harga = harga;
    this.jumlah = jumlah;
  },
};

const Makanan = Object.create(Food);
Makanan.init = function (nama, harga, jumlah, stok) {
  Food.init.call(this, nama, harga, jumlah);
  this.stok = stok;
};

Makanan.intoduce = function () {
  console.log('hai aku makanan');
};

const ciki = Object.create(Makanan);

ciki.init('ciki', 2000, 2, 100);
ciki.calcPrice();
console.log(ciki);
ciki.intoduce();
