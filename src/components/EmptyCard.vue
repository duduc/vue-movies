<template>
  <div class="mui-col-md-3 movie-card" v-on:click="emitAdd">
    <div class="card-content">
      <button class="center-btn mui-btn mui-btn--large mui-btn--primary mui-btn--fab">+</button>
    </div>
  </div>
</template>

<script setup>
import { defineEmit } from 'vue';

const emits = defineEmit([
  'add',
]);

function emitAdd() {
  emits('add');
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
  position: relative;
}

.center-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.buttons-container > button {
  max-width: 200px;
  min-width: 150px;
  margin-left: 0;
}
</style>
