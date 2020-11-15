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
          <b-alert v-model="isCity" variant="info" dismissible>
            Sorry, City Not Found!
          </b-alert>
          <div class="card">
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
            </div>
            <div class="card-body text-center">
              <h5 class="card-title mb-0">{{ weather.cityName }}</h5>
              <h6 class="subtitle">{{ weather.country }}</h6>

              <h1 class="pt-3 mb-0">{{ weather.temperature }}&deg;C</h1>
              <p>{{ weather.description }}</p>

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
};
</script>
