<template>
    <tr v-on:click="!movie.editing ? emitEvent('select') : null" v-bind:class="{ 'selected-movie': movie.selected }">
      <td>{{ movie.id }}</td>
      <template v-if="movie.editing">
        <td>
          <div class="mui-textfield override-textfield">
            <input required placeholder="Nom*" type="text" v-model="movie.name"/>
          </div>
        </td>
        <td>
          <div class="mui-textfield override-textfield">
            <textarea placeholder="Entrez une description..." v-model="movie.description"/>
          </div>
        </td>
      </template>
      <template v-else>
        <td>{{ movie.name }}</td>
        <td>{{ movie.description }}</td>
      </template>
      <td>
        <div class="buttons-container">
        <template v-if="movie.editing">
          <button v-if="isNew === true" class="mui-btn mui-btn--small mui-btn--accent" v-on:click="emitEvent('update')">Créer</button>
          <button v-else class="mui-btn mui-btn--small mui-btn--accent" v-on:click="emitEvent('update')">Mettre à jour</button>
          <button class="mui-btn mui-btn--small mui-btn--danger" v-on:click="emitEvent('cancel')">Annuler</button>
        </template>
        <template v-else>
          <button class="mui-btn mui-btn--small mui-btn--primary" v-on:click="emitEvent('edit')">Editer</button>
          <button class="mui-btn mui-btn--small mui-btn--danger" v-on:click="emitEvent('delete')">Supprimer</button>
        </template>
        </div>
      </td>
    </tr>
</template>

<script setup>
import { computed, defineEmit, defineProps } from 'vue';
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
})

const isNew = computed(() => {
  return props.movie.previousName === '' && props.movie.previousDesc === '';
})

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
.buttons-container {
  display: flex;
  flex-direction: column;
  align-content: flex-end;
}

.buttons-container > button {
  max-width: 200px;
  min-width: 150px;
  margin-left: 0;
}

.override-textfield > textarea, .override-textfield > input {
  font-size: 14px;
}

tr:hover {
  background-color: #BBDEFB;
  cursor: pointer;
}
</style>
