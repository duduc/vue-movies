import { createRouter, createWebHistory } from 'vue-router';

import App from '../App.vue';
import { appRoutes } from './app.routes';

const routes = [
  {
    path: '/',
    component: App,
    name: 'app',
    redirect: {
      name: 'app.login',
    },
    children: appRoutes,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
