<script setup lang="ts">
import Footer from '../components/Footer.vue'
import Nav from '../components/Nav.vue'
</script>

<template>
  <Nav/>
  <div class="container text-center">
    <h1>Home Page</h1>
  </div>
  <Footer/>
</template>

<style scoped>
  .container {
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
