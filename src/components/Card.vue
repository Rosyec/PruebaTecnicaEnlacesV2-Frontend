<script setup lang="ts">
import router from '@/router';
    const props = defineProps({
        id: { type: String, required: true },
        title: { type: String, required: true },
        content: { type: String, required: true },
        author: { type: String, required: true },
    })

    const onViewPost = () => {
        router.push(`/home/edit/${props.id}`)
    }
</script>

<template>
  <div class="card" style="width: 18rem">
    <img src="../assets/logo.svg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title"> {{ title }} </h5>
      <p class="card-text"> {{ content }} </p>
      <a @click="onViewPost()" class="btn btn-primary">Editar</a>
    </div>
  </div>
</template>

<style scoped></style>
