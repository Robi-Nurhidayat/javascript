'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryNeighbor = function (data) {
  const html = `
  <article class="country">
    <img class="country__img" src="${data.coatOfArms.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${data.population}</p>
      <p class="country__row"><span>🗣️</span>${data.languages.ind}</p>
      <p class="country__row"><span>💰</span>${data.currencies.IDR.symbol}</p>
    </div>
  </article>
`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

// const getCountry = contry => {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${contry}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     getCountryNeighbor(data);
//   });
// };

// getCountry('indonesia');

// getCountry('indonesia');

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

// const getCountry = function (country) {
//   fetch(`https:restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`country not found status ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       getCountryNeighbor(data[0]);

//       return fetch(`https:restcountries.com/v3.1/name/${country}`);
//     })
//     .then(response => response.json())
//     .then(data => getCountryNeighbor(data[0], 'neighbor'))
//     .catch(err => {
//       console.log(err);
//       renderError(`Gagal memuat ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountry('indonesia');
// });

// getCountry('asdasd');

// Challenge 1

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng},14z?geoit=json&auth=3591584854395899404x59258`
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`err ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       return fetch(`https:restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       getCountryNeighbor(data[0]);
//     })
//     .catch(err => {
//       console.log(err);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   whereAmI(-6.9351854, 107.6002968);
// });

// console.log('test start');

// setTimeout(() => {
//   console.log('executing after 0 second');
// }, 0);

// Promise.resolve('Promise 1').then(res => {
//   console.log(res);
// });

// Promise.resolve('Promise 2').then(res => {
//   for (let i = 0; i < 1000; i++) {}
//   console.log(res);
// });

// console.log('test end');

// / Building simple promise

// const lottrePromise = new Promise(function (resolve, reject) {
//   console.log('Lottre di mulai');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You win');
//     } else {
//       reject(new Error('You lost'));
//     }
//   }, 2000);
// });

// lottrePromise
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// promisfying promise

const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('Wait 1 second');

    return wait(1);
  })
  .then(() => {
    console.log('wait 2 second');
    return wait(1);
  })
  .then(() => {
    console.log('wait 3 second');
  });

// const whereAmI = function (lat, lng) {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${lng},14z?geoit=json&auth=3591584854395899404x59258`
//       );
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`err ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       return fetch(`https:restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       getCountryNeighbor(data[0]);
//     })
//     .catch(err => {
//       console.log(err);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition()
//   .then(pos => console.log(pos))
//   .catch(err => console.error(err));

// btn.addEventListener('click', whereAmI);

// Challenge 2

// const containerImage = document.querySelector('.images');
// let image;
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     image = document.createElement('img');
//     image.src = imgPath;

//     image.addEventListener('load', function () {
//       containerImage.appendChild(image);
//       resolve(image);
//       wait(2).then(() => {
//         image.style.display = 'none';
//       });
//     });

//     image.addEventListener('error', function () {
//       reject(new Error('image not found'));
//     });
//   });
// };

// let count = 1;

// for (let i = 1; i < 4; i++) {
//   createImage(`img/img-1.jpg`)
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => console.log(err));
// }

// Challenge 2 belum selesai

// Async await

const dimanaSaya = async function (negara) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${negara}`
    );

    console.log(response);

    const data = await response.json();
    console.log(data[0].name.common);
  } catch (err) {
    alert(err.message);
  }
};

dimanaSaya('indonesia');
