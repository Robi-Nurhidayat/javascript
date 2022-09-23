'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance; // in km
    this.duration = duration; // in minute
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // min / km

    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);

    return this.speed;
  }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cy1 = new Cycling([39, -12], 27, 95, 253);

console.log(run1, cy1);

//////////////////////////////////////////////////////////////
// Application architecture
class App {
  #map;
  #mapEvent;
  #workout = [];
  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newWorkout);

    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._loadMap, function () {
        alert("Could'nt your location");
      });
    }
  }

  _loadMap = position => {
    console.log(this);
    const { latitude, longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude}.${longitude}`);

    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm);
  };

  _showForm = mapE => {
    form.classList.remove('hidden');
    inputDistance.focus();
    this.#mapEvent = mapE;
  };

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout = e => {
    e.preventDefault();

    const validInputs = (...inputs) =>
      inputs.every(input => Number.isFinite(input));

    const allPositive = (...inputs) => inputs.every(input => input > 0);

    // get data from form

    const type = inputType.value;
    const distance = +inputCadence.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // if workout running, create object running

    if (type === 'running') {
      const cadence = +inputCadence.value;
      // check if data is valid

      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)

        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert('Inputs have to be positive numbers');
      }

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // if workout cycling, create object cycling

    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      console.log(elevation);

      if (
        !validInputs(distance, duration, elevation) ||
        distance > 0 ||
        duration > 0 ||
        elevation > 0
      ) {
        return alert('Inputs have to be positive numbers');
      }
      workout = new Running([lat, lng], distance, duration, elevation);
    }

    // add new object to workout array

    this.#workout.push(workout);

    // render workout on map as marker
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${type}-popup`,
        })
      )
      .setPopupContent('workout')
      .openPopup();

    // render workout on list

    // hide form

    // Clear input fields
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        '';
  };
}

const app = new App();
app;
