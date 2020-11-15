<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-6">
          <header class="header" id="header">
            <nav class="navbar">
              <div class="navbar-brand">
                <a href="/">
                  <img src="./assets/img/logo.png" alt="Simply Weather App" />
                </a>
              </div>
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <b-form-checkbox v-model="isDarkMode" name="isDarkMode" switch>
                    {{ isDarkMode ? 'Dark' : 'Light' }}
                  </b-form-checkbox>
                </li>
              </ul>
            </nav>
          </header>
          <div class="card mb-4">
            <div class="card-header">
              <form v-on:submit.prevent="getWeather">
                <input
                  type="text"
                  class="form-control shadow-none"
                  placeholder="Please enter city name..."
                  v-model="citySearch"
                  autocomplete="off"
                />
              </form>
              <b-alert v-model="isCity" variant="info" dismissible class="mt-3 mb-0">
                City not found! Please try another city
              </b-alert>
            </div>
            <div v-if="isVisible">
              <div class="card-body text-center">
                <h5 class="card-title mb-0 text-capitalize">
                  {{ weather.cityName }} (<span class="text-uppercase">{{ weather.country }}</span>)
                </h5>

                <img :src="weather.icon" alt="Weather Icon">

                <h1 class="mb-0">{{ weather.temperature }}&deg;C</h1>
                <p class="text-capitalize">{{ weather.description }}</p>

                <div class="row align-items-center justify-content-between">
                  <div class="col">
                    <h5 class="mb-0">
                      <font-awesome-icon
                        :icon="['fas', 'long-arrow-alt-down']"
                        class="mr-1 text-primary"></font-awesome-icon>
                      {{ weather.lowTemperature }}&deg;C
                    </h5>
                    <small>Low Temperature</small>
                  </div>
                  <div class="col">
                    <h5 class="mb-0">
                      <font-awesome-icon
                        :icon="['fas', 'long-arrow-alt-up']"
                        class="mr-1 text-danger"></font-awesome-icon>
                      {{ weather.highTemperature }}&deg;C
                    </h5>
                    <small>High temperature</small>
                  </div>
                </div>
              </div>
              <div class="card-footer text-center">
                <div class="row align-items-center justify-content-between">
                  <div class="col">
                    <p class="mb-0">{{ weather.feelsLike }}&deg;C</p>
                    <small>Feels like</small>
                  </div>
                  <div class="col">
                    <p class="mb-0">{{ weather.humidity }}%</p>
                    <small>Humidity</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      citySearch: '',
      isCity: false,
      isDarkMode: false,
      isVisible: false,
      weather: {
        cityName: 'Bandung',
        icon: '',
        country: 'ID',
        temperature: 22,
        description: 'Clouds everywhere',
        lowTemperature: '19',
        highTemperature: '30',
        feelsLike: '20',
        humidity: '55',
      },
    };
  },
  methods: {
    async getWeather() {
      console.log(this.citySearch);
      const key = 'd69bae38bbe43502a0575edea710715e';
      const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${key}&units=metric`;
      // Fetch Weather
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        this.citySearch = '';
        this.weather.cityName = data.name;
        // eslint-disable-next-line no-unused-expressions,no-sequences
        this.weather.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        this.weather.country = data.sys.country;
        this.weather.temperature = Math.round(data.main.temp);
        this.weather.description = data.weather[0].description;
        this.weather.lowTemp = Math.round(data.main.temp_min);
        this.weather.highTemp = Math.round(data.main.temp_max);
        this.weather.feelsLike = Math.round(data.main.feels_like);
        this.weather.humidity = Math.round(data.main.humidity);
        this.isVisible = true;
      } catch (error) {
        console.log(error);
        this.isCity = true;
        this.isVisible = false;
      }
    },
  },
};
</script>
