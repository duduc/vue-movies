<template>
  <div>
    <div class="mui-appbar">
      <table width="100%">
        <tr class="app-bar-row">
          <td class="mui--appbar-height">Hello, {{ username }} !</td>
          <td v-on:click="logout" class="mui--appbar-height" align="right">Logout</td>
        </tr>
      </table>
    </div>
    <ul class="mui-tabs__bar mui-tabs__bar--justified">
      <li class="mui--is-active"><a><router-link :to="{name: 'home.series'}">Séries</router-link></a></li>
      <li class="mui--is-active"><a><router-link :to="{name: 'home.movies'}">Films</router-link></a></li>
    </ul>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { router } from '../routes/routes';

const username = window.localStorage.getItem('username') ?? '';

function logout() {
  window.localStorage.removeItem('username');
  window.localStorage.removeItem('auth');
  router.push({
    name: 'app.login',
  });
}

</script>

<style scoped>
.app-bar-row {
  vertical-align: middle;
}

.app-bar-row > td {
  padding: 0 12px 0 12px;
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
