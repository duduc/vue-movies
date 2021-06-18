
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import { listRoutes } from './list-routes';

export const appRoutes = [
  {
    path: '/login',
    component: Login,
    name: 'app.login',
    beforeEnter: (to, from, next) => {
      if (window.localStorage.getItem('auth') === 'true') {
        next('/home');
      } else {
        next();
      }
    },
  },
  {
    path: '/home',
    component: Home,
    name: 'app.movies',
    children: listRoutes,
    redirect: {
      name: 'home.series',
    },
    beforeEnter: (to, from, next) => {
      if (window.localStorage.getItem('auth') === 'true') {
        next();
      } else {
        next('/login');
      }
    },
  },
];
