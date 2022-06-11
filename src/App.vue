<script setup>
import Navbar from "./components/NavBar.vue";
</script>

<template>
  <div class="flex flex-col bg-slate-100 h-screen">
    <router-view></router-view>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,700;1,400&display=swap');

body {
  @apply bg-slate-100;
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>
