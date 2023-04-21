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
  <div v-if="myPosts.length > 0">
    <h1>Posts</h1>
    <div class="container text-center d-flex justify-content-center">
      <div class="row">
        <div class="col" v-for="post in myPosts">
          <Card :id="post._id" :title="post.title" :content="post.content" :author="post.author"/>
        </div>
      </div>
    </div>
  </div>
  <div class="container text-center d-flex justify-content-center" v-if="myPosts.length === 0">
    <div class="row">
      <span class="loader"></span>
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

 .loader {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: #0e8335;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
  } 
</style>