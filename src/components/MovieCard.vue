<template>
  <div class="mui-col-md-3 movie-card" v-on:click="!movie.editing ? emitEvent('select') : null">
    <div
      class="card-content"
      v-bind:class="{ 'selected-movie': movie.selected }"
      v-on:mouseenter="hover = true"
      v-on:mouseleave="hover = false"
    >
      <div class="edit-container" v-if="hover">
        <div v-if="!movie.editing">
          <svg v-on:click="emitEvent('delete')" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
          <svg v-on:click="emitEvent('edit')" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>
        </div>
        <div v-else>
          <svg v-on:click="emitEvent('cancel')" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
          <svg v-on:click="emitEvent('update')" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
        </div>
      </div>
      <h6>{{ movie.id }}</h6>
      <template v-if="movie.editing">
        <div class="mui-textfield override-textfield">
          <input required placeholder="Nom*" type="text" v-model="movie.name"/>
        </div>
        <div class="mui-textfield override-textfield">
          <textarea placeholder="Entrez une description..." v-model="movie.description"/>
        </div>
      </template>
      <template v-else>
        <h3>{{ movie.name }}</h3>
        <span>{{ movie.description }}</span>
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineEmit, defineProps, ref } from 'vue';

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
})

const hover = ref(false);

const emits = defineEmit([
  'update',
  'edit',
  'cancel',
  'delete',
  'select',
]);

function emitEvent(type) {
  emits(type, props.movie);
}
</script>

<style scoped>
.movie-card {
  height: 300px;
}

.card-content {
  height: 292px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 -11px 0 -11px;
  padding: 0 5px 0 5px;
  outline: 1px solid rgba(0,0,0,.12);
  overflow: scroll;
  position: relative;
}

.edit-container {
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px;
}

.edit-container:hover {
  cursor: pointer;
}

.selected-movie {
  background-color: #6abbff;
}

.card-content::-webkit-scrollbar {
  display: none;
}

.override-textfield > textarea {
  width: 220px;
  height: 160px;
}

.override-textfield > textarea, .override-textfield > input {
  font-size: 14px;
}
</style>
