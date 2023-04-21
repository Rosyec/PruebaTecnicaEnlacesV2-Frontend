<script setup lang="ts">
import router from '@/router'
import { getPostById, updatePost, deletePost } from '../services/service.backend'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

let id = ref<string>('')
let title = ref<string>('')
let content = ref<string>('')
let author = ref<string>('')

onMounted(() => {
  searchPost()
})

const searchPost = async () => {
  const route = useRoute()
  const params: string = route.params.id as string
  const response = await getPostById(params)
  id.value = response?._id!
  title.value = response?.title!
  content.value = response?.content!
  author.value = response?.author!
}

const onEditPost = async () => {
  const response = await updatePost(id.value, { content: content.value, title: title.value }); 
  if (response) {
      router.push('/home/posts');
  }
}

const onDeletePost = async () => {
    const response = await deletePost(id.value);
    if (response) {
        router.push('/home/posts');
    }
}
</script>

<template>
  <h1>Editar Post</h1>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="card p-2">
          <div class="input">
            <input v-model="title" class="form-control" type="text" placeholder="Titulo" />
          </div>
          <div class="input">
            <textarea
              v-model="content"
              class="form-control"
              type="text-"
              placeholder="Contenido"
              minlength="20"
              maxlength="200"
            />
          </div>
          <button @click="onDeletePost()" class="btn btn-danger mt-2">Eliminar</button>
          <button @click="onEditPost()" class="btn btn-primary mt-2">Editar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: center;
}

.card {
  gap: 5px;
}

textarea {
  height: 300px;
}
</style>
