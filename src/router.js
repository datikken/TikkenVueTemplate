import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/sign_up',
      name: 'Sign up',
      component: SignUp,
    },
    {
      path: '/sign_in',
      name: 'Sign in',
      component: SignIn,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
