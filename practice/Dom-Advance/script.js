'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button Scroll to

const section1 = document.querySelector('#section--1');
const btnScrollTo = document.querySelector('.btn--scroll-to');

btnScrollTo.addEventListener('click', function (e) {
  // smooth scroll
  /* first way
  const sec1Bound = section1.getBoundingClientRect();

  window.scrollTo({
    top: sec1Bound.top + window.pageYOffset,
    left: sec1Bound.left + window.pageXOffset,
    behavior: 'smooth',
  });

  */

  /* second way
   */

  section1.scrollIntoView({ behavior: 'smooth' });
});

/** Navigation smooth scrooling */

const nav = document.querySelector('.nav__links');
nav.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const linkId = e.target.getAttribute('href');
    document.querySelector(linkId).scrollIntoView({ behavior: 'smooth' });
  }

  // document.querySelector(`${id}`)
  // yang harus dilakukan sesuai id hrs smooth scroll
});
