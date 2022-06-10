<script setup>
import Navbar from "./components/NavBar.vue";
</script>

<template>
  <div class="flex flex-col bg-slate-100 h-screen">
    <router-view></router-view>
  </div>
</template>

<style>

body {
  @apply bg-slate-100;
}
</style>
