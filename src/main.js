import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyA64AcTXdJkkkO8U7vTFhqJTFwRUq1u1D0",
  authDomain: "manimani-site.firebaseapp.com",
  databaseURL: "https://manimani-site.firebaseio.com",
  projectId: "manimani-site",
  storageBucket: "manimani-site.appspot.com",
  messagingSenderId: "837961701765",
  appID: "1:837961701765:web:bcf55e3ad80516b0640cec",
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
