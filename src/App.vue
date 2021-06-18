<template>
  <router-view v-slot="{ Component }">
    <transition name="list" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-move {
  transition: transform 0.5s;
}
</style>
