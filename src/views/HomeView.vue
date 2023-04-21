<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '../components/Footer.vue'
import Nav from '../components/Nav.vue'
</script>

<template>
  <Nav/>
  <div class="container text-center">
    <RouterView />
  </div>
  <Footer/>
</template>

<style scoped>
  .container {
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
