'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('.header');

// creating and inserting element

// create element
const message = document.createElement('div');

// insert content or insert element
// 1)
// add a class
message.classList.add('cookie-message');

// 2)
// add text and element html
message.innerHTML =
  'We use cookied for improved functionallity and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// insert elemen an we create to header
header.append(message);

// deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// untuk mendapatkan nilai dari css yang bukan inline css
// atau untuk mengetahui nilai yang belum di definisan di css
// kita gunakan fungsi getComputedStyle

console.log(getComputedStyle(message).height);
console.log(typeof getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

console.log(getComputedStyle(message).height);

// custom property
// misal kita punya variabel di css
// contoh :root{--primary-color: "red"}

// untuk bisa mengubah warna tersebut kita bisa menggunakan documentElement

document.documentElement.style.setProperty('--color-primary', 'lightblue');

// Attributes

const logo = document.querySelector('.nav__logo');

// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = 'Logo Bankist';

// // getAttribute -> untuk mengambil attribut yang ada di tag html
// console.log(logo.getAttribute('designer'));

// // setAttribute -> untuk membuat attribut baru di tag html

// logo.setAttribute('company', 'Indonesia');

// console.log(logo.getAttribute('company'));

// // data Attribute
// // khusus tag html yang didalam nya ada attribute dengan awalan kata data -> misal data-version-number atau data-pribadi
// // untuk mengakses nya kata depan nya diubah jadi dataset dan sisa kata nya menjadi camelcase -> misal  data-version-number = dataset.versionNumber

// console.log(logo.dataset.versionNumber);

// // classes

// logo.classList.add('c', 'd');
// logo.classList.remove('c', 'd');
// logo.classList.toggle('a');
// logo.classList.contains('d');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'Height/Width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // supaya ada animasi nya
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // cara modern -> jika browser sudah support

  section1.scrollIntoView({ behavior: 'smooth' });
});

// more events

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function (e) {
  alert('mouse enter to h1');
});

const alertH1 = function (e) {
  alert('mouse enter to h1');
};

// kita bisa membatalkan addEventListener
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
