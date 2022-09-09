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

const navLinks = document.querySelector('.nav__links');
navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const linkId = e.target.getAttribute('href');
    document.querySelector(linkId).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed content

const tabContainer = document.querySelector('.operations__tab-container');
const tabbed = document.querySelectorAll('.operations__tab');
const tabbedContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  tabbed.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabbedContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );

  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// sticky navigation

const header = document.querySelector('.header');
const headerCallback = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    document.querySelector('.nav').classList.add('sticky');
  } else {
    document.querySelector('.nav').classList.remove('sticky');
  }
};
const headerObserver = new IntersectionObserver(headerCallback, {
  root: null,
  threshold: 0.15,
});

headerObserver.observe(header);

// Revealling section

const sections = document.querySelectorAll('.section');
const sectionCallback = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
  }

  observer.observe(entry.target);
};
const sectionObserver = new IntersectionObserver(sectionCallback, {
  root: null,
  threshold: 0.15,
});

sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy load image

const images = document.querySelectorAll('.features__img');

const imagesCallback = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  entry.target.src = entry.target.dataset.src;

  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(imagesCallback, {
  root: null,
  threshold: 0,
});

images.forEach(img => {
  imageObserver.observe(img);
  // img.classList.remove('lazy-img');
});
