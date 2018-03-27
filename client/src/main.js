/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import Panel from '@/components/globals/Panel'
import PanelMusic from '@/components/globals/PanelMusic'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Notifications from 'vue-notification'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(Notifications)
Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)
Vue.component('panel', Panel)
Vue.component('panel-music', PanelMusic)


sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    settings: {
      password: '',
      password_confirmation: ''
    }
  },
  router,
  store,
  components: { App },
  template: '<App/>'
})
