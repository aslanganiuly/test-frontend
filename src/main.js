import Vue from 'vue'
import App from './App.vue'
import VueFlex from "vue-flex";
import "vue-flex/dist/vue-flex.css"; 


Vue.use(VueFlex);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
