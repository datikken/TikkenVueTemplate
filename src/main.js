import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import fb from 'firebase'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    var config = {
      apiKey: "AIzaSyA3iRxaKBQi59f1_Z_l4YJMk8i7HyGLAzs",
      authDomain: "tikkenonfire.firebaseapp.com",
      databaseURL: "https://tikkenonfire.firebaseio.com",
      projectId: "tikkenonfire",
      storageBucket: "tikkenonfire.appspot.com",
      messagingSenderId: "422515112786"
    };
    fb.initializeApp(config);
    fb.auth().onAuthStateChanged(user => {
       if(user) {
        this.$store.dispatch('autoLoginUser', user)
       }
    })
  }
}).$mount('#app');
