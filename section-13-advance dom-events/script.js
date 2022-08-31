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
