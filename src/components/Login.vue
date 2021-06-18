<template>
  <div class="login-container">
    <div class="login-content">
      <form class="mui-form">
        <legend>Login</legend>
        <div class="mui-textfield">
          <input class="white-placeholder" v-model="username" type="text" placeholder="Nom d'utilisateur">
        </div>
        <div class="mui-textfield">
          <input class="white-placeholder" type="password" placeholder="Mot de passe">
        </div>
        <button type="submit" class="mui-btn mui-btn--raised mui-btn--accent" v-on:click="login">Connexion</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { router } from '../routes/routes';

const username = ref('');

function login() {
  window.localStorage.setItem('username', username.value);
  window.localStorage.setItem('auth', 'true');
  router.push(
    { name: 'app.movies' },
  );
}
</script>

<style scoped>
.login-container {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 40%;
  height: 40%;
  background-color: #2196F3;
}

.login-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mui-form > legend {
  color: white;
}

.mui-textfield > * {
  color: white;
}

.white-placeholder::placeholder {
  color: whitesmoke;
  opacity: 0.8;
}
</style>
