<template>
  <div>
    <h1 class="mui--text-center">{{ displayTitle() }}</h1>
    <form class="mui-form--inline">
      <div class="mui-textfield" style="margin: 12px">
        <input placeholder="Recherche rapide..." type="text" v-model="filterValue"/>
      </div>
    </form>
    <table class="mui-table mui-table--bordered">
      <thead>
      <tr class="table-header mui--bg-primary">
        <th v-for="header in headers">{{ header }}</th>
      </tr>
      </thead>
      <tbody>
        <transition-group name="list">
          <movie-row
            @edit="onEdit(movie)"
            @update="onUpdate(movie)"
            @delete="onDelete(movie, allMovies)"
            @cancel="onCancel(movie, allMovies)"
            @select="onSelect(movie, allMovies)"
            v-for="movie in displayedMovies"
            v-bind:movie="movie"
            :key="movie.id">
          </movie-row>
        </transition-group>
      </tbody>
    </table>
    <div class="footer">
      <span class="footer-summary"> {{ displaySummary(allMovies) }} </span>
      <button class="mui-btn mui-btn--fab mui-btn--primary" v-on:click="addMovie(allMovies)">+</button>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, onMounted, ref } from 'vue';

import useDisplay from '../composition/useDisplay';
import useFilter from '../composition/useFilter';
import useMovieActions from "../composition/useMovieActions";
import useRepository from '../composition/useRepository';

import MovieRow from './MovieRow.vue';

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

const filterValue = ref('');
const headers = [
  '#',
  'Nom',
  'Description',
  'Actions',
];
const { getItems } = useRepository(props);
const allMovies = ref([]);
const { displaySummary, displayTitle } = useDisplay(props, allMovies);
const { onDelete, onEdit, onUpdate, onCancel, onSelect, addMovie } = useMovieActions(filterValue);
const { freeSearch } = useFilter();
const displayedMovies = computed(() => {
  return freeSearch(filterValue.value, allMovies.value);
});

(() => {
  document.addEventListener('keydown', (event) => {
    const foundIndex = allMovies.value.findIndex(el => el.selected === true);
    if (foundIndex !== -1) {
      let el;
      switch (event.code) {
        case 'ArrowUp':
          if (foundIndex !== 0) {
            filterValue.value = '';
            event.preventDefault();
            el = allMovies.value.splice(foundIndex, 1)[0];
            allMovies.value.splice(foundIndex - 1, 0, el);
          }
          break;
        case 'ArrowDown':
          if (foundIndex !== allMovies.value.length) {
            filterValue.value = '';
            event.preventDefault();
            el = allMovies.value.splice(foundIndex, 1)[0];
            allMovies.value.splice(foundIndex + 1, 0, el);
          }
          break;
        case 'Delete':
          event.preventDefault();
          allMovies.value.splice(foundIndex, 1);
          break;
        default:
      }
    }
  });
})()

onMounted(async () => {
  allMovies.value = await getItems();
})
</script>

<style scoped>
.selected-movie {
  background-color: #6abbff;
}

.footer {
  float: right;
  margin: 8px;
}

.footer-summary {
  margin: 15px;
}

.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move {
  transition: transform 0.5s;
}

.table-header > th {
  color: white;
}
</style>
