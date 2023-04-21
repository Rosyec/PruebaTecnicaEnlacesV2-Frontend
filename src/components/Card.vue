<script setup lang="ts">
import router from '@/router'
import { getUserById } from '../services/service.backend';
import { onMounted, onUpdated, ref } from 'vue';
const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true }
})
let nameAuthor = ref<string>("");

onMounted(() => {
  searchUserById()
});


const onViewPost = () => {
  router.push(`/home/edit/${props.id}`)
}

const searchUserById = async () => {
    const response = await getUserById(props.author);
    if (response) {
      nameAuthor.value = response.name;
    }
}
</script>

<template>
  <div class="card" style="width: 18rem">
    <img src="../assets/logo.svg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ content }}</p>
      <strong class="my-2"> Autor -  {{ nameAuthor }} </strong>
      <a @click="onViewPost()" class="btn btn-primary">Editar</a>
    </div>
  </div>
</template>

<style scoped>
  .card-body {
    display: flex;
    flex-direction: column;
  }
</style>
