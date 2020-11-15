import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import './assets/scss/theme.scss';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
