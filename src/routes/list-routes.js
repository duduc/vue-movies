import MovieList from '../components/MovieList.vue';
import MovieGrid from '../components/MovieGrid.vue';

export const listRoutes = [
  {
    path: 'series',
    component: MovieList,
    name: 'home.series',
    props: {
      type: 'series',
    },
    beforeEnter: (to, from, next) => {
      if (window.localStorage.getItem('auth') === 'true') {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: 'movies',
    component: MovieGrid,
    name: 'home.movies',
    props: {
      type: 'movies',
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
