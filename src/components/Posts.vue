<script setup lang="ts">
import type { Post } from '@/helpers/data.interface';
import Card from '../components/Card.vue';
import { getAllPosts } from '../services/service.backend';
import { onMounted, ref } from 'vue';
let myPosts = ref<Post[]>([]);

onMounted(() => {
  getAll();
});

const getAll = async () => {
  const response = await getAllPosts();
  myPosts.value = response!;
}

</script>

<template>
  <h1>Posts</h1>
  <div class="container text-center d-flex justify-content-center">
    <div class="row">
      <div class="col" v-for="post in myPosts">
        <Card :id="post._id" :title="post.title" :content="post.content" :author="post.author"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
 Card {
  display: flex;
  justify-content: center;
 }

 .col {
  display: flex;
  justify-content: center;
 }

 .row {
  gap: 1em;
 }
</style>