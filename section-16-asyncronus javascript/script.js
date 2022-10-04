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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getCountry = function (country) {
  fetch(`https:restcountries.com/v3.1/name/${country}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`country not found status ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      getCountryNeighbor(data[0]);

      return fetch(`https:restcountries.com/v3.1/name/${country}`);
    })
    .then(response => response.json())
    .then(data => getCountryNeighbor(data[0], 'neighbor'))
    .catch(err => {
      console.log(err);
      renderError(`Gagal memuat ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountry('indonesia');
});

getCountry('asdasd');
