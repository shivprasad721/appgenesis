import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueParticles from 'vue-particles'
import VueRouter from 'vue-router'
import HomePage from './Pages/homePage.vue'
import Internship from './Pages/Internship.vue'
import apply from './Pages/googleform.vue'
import privacy from './Pages/privacy.vue'
import payment from './Pages/payment.vue'
import UPIPayment from './Pages/UPIpayment.vue'
import report from './Pages/Report.vue'
import dailyReport from './Pages/DailyReport.vue'
import offerLetter from './Pages/OfferLetterTemplate.vue'
Vue.use(VueRouter)
Vue.use(VueParticles)
// import firebase from 'firebase/app'
// import 'firebase/firestore'
const routes = [
  { path: '/', component: HomePage },
  { path: '/intern', component: Internship },
  { path: '/apply', component: apply },
  { path: '/privacy', component: privacy },
  { path: '/payment', component: payment },
  { path: '/upi-payment', component: UPIPayment },
  { path: '/report/:link', component: report },
  { path: '/daily-report', component: dailyReport },
  { path: '/offer-letter', component: offerLetter }


]
Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false

// firebase.initializeApp({
//  Configurações do seu app
// })

// export const db = firebase.firestore()
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  vuetify,router,
  render: h => h(App)
}).$mount('#app')
