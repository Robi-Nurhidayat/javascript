'use strict';

///////////////////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Modal window

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

// btn scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

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

// Page Navigation

// cara 1
// cara ini kurang efisien karena jika kita punya 1000 event akan memperlambat kinerja

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// cara 2
// langkah cara 2
// 1. menambahkan eventlistener ke parent
// 2. menetapakan element mana yang akan di event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // cocokan kelas
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clauses -> arti nya jika yang di klik bukan button
  if (!clicked) return;

  // hapus kelas operations__tab--active agar button yang ga di klik turun ke bawah

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));

  clicked.classList.add('operations__tab--active');

  // active content area

  tabsContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
    const logo = e.target.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// practice
// const header = document.querySelector('.header');

// // creating and inserting element

// // create element
// const message = document.createElement('div');

// // insert content or insert element
// // 1)
// // add a class
// message.classList.add('cookie-message');

// // 2)
// // add text and element html
// message.innerHTML =
//   'We use cookied for improved functionallity and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // insert elemen an we create to header
// header.append(message);

// // deleting elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // styles

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// // untuk mendapatkan nilai dari css yang bukan inline css
// // atau untuk mengetahui nilai yang belum di definisan di css
// // kita gunakan fungsi getComputedStyle

// console.log(getComputedStyle(message).height);
// console.log(typeof getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// console.log(getComputedStyle(message).height);

// // custom property
// // misal kita punya variabel di css
// // contoh :root{--primary-color: "red"}

// // untuk bisa mengubah warna tersebut kita bisa menggunakan documentElement

// document.documentElement.style.setProperty('--color-primary', 'lightblue');

// // Attributes

// const logo = document.querySelector('.nav__logo');

// // console.log(logo.alt);
// // console.log(logo.className);

// // logo.alt = 'Logo Bankist';

// // // getAttribute -> untuk mengambil attribut yang ada di tag html
// // console.log(logo.getAttribute('designer'));

// // // setAttribute -> untuk membuat attribut baru di tag html

// // logo.setAttribute('company', 'Indonesia');

// // console.log(logo.getAttribute('company'));

// // // data Attribute
// // // khusus tag html yang didalam nya ada attribute dengan awalan kata data -> misal data-version-number atau data-pribadi
// // // untuk mengakses nya kata depan nya diubah jadi dataset dan sisa kata nya menjadi camelcase -> misal  data-version-number = dataset.versionNumber

// // console.log(logo.dataset.versionNumber);

// // // classes

// // logo.classList.add('c', 'd');
// // logo.classList.remove('c', 'd');
// // logo.classList.toggle('a');
// // logo.classList.contains('d');

// // more events

// // const h1 = document.querySelector('h1');

// // h1.addEventListener('mouseenter', function (e) {
// //   alert('mouse enter to h1');
// // });

// // const alertH1 = function (e) {
// //   alert('mouse enter to h1');
// // };

// // // kita bisa membatalkan addEventListener
// // setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// DOM traversing
// const h1 = document.querySelector('h1');

// // Going downwards: child

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'lightblue';
// h1.lastElementChild.style.color = 'red';

// // Going upwards: parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // h1.closest('.header').style.backgroundColor = 'salmon';
// h1.closest('h1').style.backgroundColor = 'salmon';

// // Going sideways: siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(el => {
//   console.log('el ' + el);

//   if (el !== h1) el.style.transform = 'scale(2)';
// });
